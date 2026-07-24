import { env } from '../config/env.js';
import { CRM_API_PATHS, CRM_ERROR_CODES, HTTP_STATUS } from '../config/constants.js';
import { logger } from '../utils/logger.js';
import type {
  CrmLeadPayload,
  CrmApiResponse,
  HttpClientResult,
} from '../types/index.js';

/* ============================================================
 * Error class
 * ============================================================ */

export class CrmIntegrationError extends Error {
  public readonly code: string;
  public readonly httpStatus: number | undefined;

  constructor(message: string, code: string, httpStatus?: number) {
    super(message);
    this.name = 'CrmIntegrationError';
    this.code = code;
    this.httpStatus = httpStatus;
  }
}

/* ============================================================
 * Helpers
 * ============================================================ */

function buildUrl(): string {
  const base = env.crmBaseUrl!.replace(/\/+$/, '');
  return `${base}${CRM_API_PATHS.leadInquiries}`;
}

function buildHeaders(requestId: string): Record<string, string> {
  return {
    Authorization: `Bearer ${env.crmApiKey!}`,
    'Content-Type': 'application/json',
    'X-Request-ID': requestId,
  };
}

function isRetryable(status: number): boolean {
  return status >= 500;
}

function isRetryableError(err: unknown): boolean {
  if (err instanceof CrmIntegrationError) return false;
  if (err instanceof TypeError) {
    // fetch throws TypeError for network failures
    return true;
  }
  return false;
}

function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

/* ============================================================
 * Core fetch wrapper (single attempt, timeout)
 * ============================================================ */

async function fetchWithTimeout(
  url: string,
  options: RequestInit & { timeout: number },
): Promise<HttpClientResult> {
  const { timeout, ...fetchOptions } = options;

  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeout);

  try {
    const response = await fetch(url, {
      ...fetchOptions,
      signal: controller.signal,
    });

    let body: unknown;
    const text = await response.text();
    try {
      body = JSON.parse(text);
    } catch {
      body = text;
    }

    return {
      ok: response.ok,
      status: response.status,
      body,
    };
  } finally {
    clearTimeout(timer);
  }
}

/* ============================================================
 * Public API — single retryable post
 * ============================================================ */

export async function postLeadInquiry(
  payload: CrmLeadPayload,
  requestId: string,
): Promise<CrmApiResponse> {
  const url = buildUrl();
  const headers = buildHeaders(requestId);
  const maxAttempts = env.crmRetryCount + 1;

  for (let attempt = 1; attempt <= maxAttempts; attempt++) {
    const start = performance.now();

    try {
      const result = await fetchWithTimeout(url, {
        method: 'POST',
        headers,
        body: JSON.stringify(payload),
        timeout: env.crmTimeout,
      });

      const elapsed = (performance.now() - start).toFixed(1);

      logger.info(
        `[CRM] POST ${url} → ${result.status} (${elapsed}ms) ` +
          `attempt ${attempt}/${maxAttempts} ` +
          `X-Request-ID: ${requestId}`,
      );

      if (result.ok) {
        const body = result.body as Record<string, unknown> | null;
        const innerData = body?.data as Record<string, unknown> | undefined;
        const recordId =
          typeof innerData?.uuid === 'string'
            ? innerData.uuid
            : typeof innerData?.lead_number === 'string'
              ? innerData.lead_number
              : undefined;
        return {
          success: true,
          id: recordId,
        };
      }

      /* ---------- non-retryable status codes ---------- */
      if (result.status === HTTP_STATUS.BAD_REQUEST) {
        throw new CrmIntegrationError(
          'CRM rejected the payload as invalid.',
          CRM_ERROR_CODES.CRM_VALIDATION_FAILED,
          400,
        );
      }
      if (result.status === 401) {
        throw new CrmIntegrationError(
          'CRM authentication failed. Check CRM_API_KEY.',
          CRM_ERROR_CODES.CRM_AUTH_FAILED,
          401,
        );
      }
      if (result.status === 403) {
        throw new CrmIntegrationError(
          'CRM access denied.',
          CRM_ERROR_CODES.CRM_AUTH_FAILED,
          403,
        );
      }
      if (result.status === HTTP_STATUS.NOT_FOUND) {
        throw new CrmIntegrationError(
          'CRM endpoint not found.',
          CRM_ERROR_CODES.CRM_INTEGRATION_ERROR,
          404,
        );
      }

      /* ---------- retryable ---------- */
      if (isRetryable(result.status) && attempt < maxAttempts) {
        const delay = env.crmRetryDelay * Math.pow(2, attempt - 1);
        logger.warn(
          `[CRM] Retrying in ${delay}ms after ${result.status} ` +
            `(attempt ${attempt}/${maxAttempts})`,
        );
        await sleep(delay);
        continue;
      }

      /* ---------- exhausted retries / non-retryable 5xx ---------- */
      throw new CrmIntegrationError(
        'CRM integration failed.',
        CRM_ERROR_CODES.CRM_INTEGRATION_ERROR,
        result.status,
      );
    } catch (err) {
      const elapsed = (performance.now() - start).toFixed(1);

      /* Re-throw known integration errors immediately. */
      if (err instanceof CrmIntegrationError) {
        logger.error(
          `[CRM] ${err.code} after ${elapsed}ms (attempt ${attempt}/${maxAttempts})`,
        );
        throw err;
      }

      /* Timeout via AbortController produces an AbortError (name: "AbortError"). */
      const isTimeout =
        err instanceof DOMException && err.name === 'AbortError';

      if (isTimeout) {
        logger.warn(
          `[CRM] Timeout after ${env.crmTimeout}ms (attempt ${attempt}/${maxAttempts})`,
        );

        if (attempt < maxAttempts) {
          const delay = env.crmRetryDelay * Math.pow(2, attempt - 1);
          await sleep(delay);
          continue;
        }

        throw new CrmIntegrationError(
          'CRM request timed out.',
          CRM_ERROR_CODES.CRM_TIMEOUT,
        );
      }

      /* Network / fetch-level failure. */
      if (isRetryableError(err) && attempt < maxAttempts) {
        const delay = env.crmRetryDelay * Math.pow(2, attempt - 1);
        logger.warn(
          `[CRM] Network error, retrying in ${delay}ms ` +
            `(attempt ${attempt}/${maxAttempts})`,
        );
        await sleep(delay);
        continue;
      }

      /* Non-retryable or exhausted. */
      const message =
        err instanceof Error ? err.message : 'Unknown CRM error';
      logger.error(
        `[CRM] Unrecoverable error after ${elapsed}ms (attempt ${attempt}/${maxAttempts}): ${message}`,
      );

      throw new CrmIntegrationError(
        'CRM integration failed.',
        CRM_ERROR_CODES.CRM_INTEGRATION_ERROR,
      );
    }
  }

  /* Should never reach here — safety throw. */
  throw new CrmIntegrationError(
    'Exhausted all CRM retry attempts.',
    CRM_ERROR_CODES.CRM_UNAVAILABLE,
  );
}
