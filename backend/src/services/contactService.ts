import { randomUUID } from 'node:crypto';
import type { ContactRequest, InquiryPayload, IntegrationResult } from '../types/index.js';
import { crmService } from './crmService.js';
import { logger } from '../utils/logger.js';

function buildInquiryPayload(contact: ContactRequest): InquiryPayload {
  const requestId = randomUUID();

  return {
    source: 'website',
    requestId,
    name: contact.name.trim(),
    email: contact.email.trim().toLowerCase(),
    phone: contact.phone?.trim() || undefined,
    visaType: contact.visaType?.trim() || undefined,
    preferredCountry: contact.preferredCountry?.trim() || undefined,
    message: contact.message.trim(),
    submittedAt: new Date().toISOString(),
    metadata: {
      originalPhone: contact.phone || undefined,
    },
  };
}

/**
 * Process an incoming inquiry from the website.
 *
 * Responsibilities (in order):
 *  1. Normalise the raw request.
 *  2. Generate a server-side UUID v4 for end-to-end tracking.
 *  3. Forward to the downstream integration service (CRM).
 *  4. Interpret the response and return a standardised result.
 *
 * This service is transport-agnostic — it never knows whether
 * the downstream is CRM, email, webhook, or queue.
 */
export async function processInquiry(
  contact: ContactRequest,
): Promise<IntegrationResult> {
  const payload = buildInquiryPayload(contact);

  logger.info(
    `[Inquiry ${payload.requestId}] Processing from ${payload.name} <${payload.email}>`,
  );

  try {
    const result = await crmService.forwardInquiry(payload);

    if (result.success) {
      logger.info(
        `[Inquiry ${payload.requestId}] Processed successfully` +
          (result.referenceId ? ` (ref: ${result.referenceId})` : ''),
      );
    } else {
      logger.error(
        `[Inquiry ${payload.requestId}] Failed: ${result.error}` +
          (result.code ? ` [${result.code}]` : ''),
      );
    }

    return result;
  } catch (error) {
    const message =
      error instanceof Error ? error.message : 'Unknown error';
    logger.error(
      `[Inquiry ${payload.requestId}] Unexpected error: ${message}`,
    );

    return {
      success: false,
      error: 'Failed to process inquiry',
      code: 'INTERNAL_ERROR',
    };
  }
}
