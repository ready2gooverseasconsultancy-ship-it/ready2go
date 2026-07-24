import type { InquiryPayload, IntegrationResult } from '../types/index.js';
import { env } from '../config/env.js';
import { logger } from '../utils/logger.js';
import { postLeadInquiry, CrmIntegrationError } from './crmClient.js';
import { toCrmLeadPayload } from './crmMapper.js';

/**
 * CRM integration service interface.
 *
 * Defines the contract for forwarding inquiries to a downstream CRM.
 * Future transports (webhook, queue) can implement the same shape
 * and be swapped via dependency injection without changing callers.
 */
export interface ICrmService {
  /** Forward a normalised inquiry to the downstream CRM. */
  forwardInquiry(payload: InquiryPayload): Promise<IntegrationResult>;
}

export class CrmService implements ICrmService {
  /**
   * Forward a normalised inquiry to the downstream CRM.
   *
   * - Respects the CRM_ENABLED feature flag.
   * - Maps the inquiry into the CRM payload format.
   * - Delegates to the retry-capable HTTP client.
   * - Returns a standardised IntegrationResult.
   */
  async forwardInquiry(payload: InquiryPayload): Promise<IntegrationResult> {
    /* ---------- feature flag ---------- */
    if (!env.crmEnabled) {
      logger.info(
        `[CRM] CRM integration disabled by configuration ` +
          `(inquiry ${payload.requestId}). No retries, no HTTP client execution.`,
      );
      return {
        success: false,
        error: 'Inquiry service is currently unavailable.',
        code: 'CRM_DISABLED',
      };
    }

    logger.info(
      `[CRM] Forwarding inquiry ${payload.requestId} ` +
        `from ${payload.name} <${payload.email}>`,
    );

    try {
      const crmPayload = toCrmLeadPayload(payload);
      const response = await postLeadInquiry(crmPayload, payload.requestId);

      logger.info(
        `[CRM] Inquiry ${payload.requestId} accepted` +
          (response.id ? ` (CRM ID: ${response.id})` : ''),
      );

      return {
        success: true,
        referenceId: response.id ?? undefined,
      };
    } catch (error) {
      if (error instanceof CrmIntegrationError) {
        logger.error(
          `[CRM] ${error.code} for inquiry ${payload.requestId}: ${error.message}`,
        );

        return {
          success: false,
          error: mapCrmErrorMessage(error.code),
          code: error.code,
        };
      }

      const message =
        error instanceof Error ? error.message : 'Unknown error';
      logger.error(
        `[CRM] Unexpected error for inquiry ${payload.requestId}: ${message}`,
      );

      return {
        success: false,
        error: 'Failed to process inquiry',
        code: 'CRM_INTEGRATION_ERROR',
      };
    }
  }
}

/* ---------- user-facing error messages ---------- */

function mapCrmErrorMessage(code: string): string {
  switch (code) {
    case 'CRM_UNAVAILABLE':
      return 'Inquiry service temporarily unavailable.';
    case 'CRM_TIMEOUT':
      return 'Inquiry service timed out. Please try again.';
    case 'CRM_AUTH_FAILED':
      return 'Inquiry service configuration error.';
    case 'CRM_VALIDATION_FAILED':
      return 'Inquiry service rejected the request.';
    default:
      return 'Failed to process inquiry';
  }
}

/** Default singleton — replace with DI container in a future phase. */
export const crmService: ICrmService = new CrmService();
