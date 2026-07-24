/* ============================================================
 * Enterprise Error Mapper
 *
 * Single source of truth for converting API errors, HTTP status
 * codes, and network failures into user-friendly messages.
 *
 * Every public-facing error message lives here — never in an
 * API client, component, or hook.
 * ============================================================ */

/* ---------- types ---------- */

export interface ApiErrorBody {
  code?: string;
  error?: string;
  message?: string;
}

/* ---------- error code map ---------- */

const ERROR_CODE_MAP: Record<string, string> = {
  CRM_DISABLED:
    'Our inquiry service is temporarily unavailable. Please try again shortly.',
  CRM_TIMEOUT:
    'The request timed out. Please try again.',
  CRM_UNAVAILABLE:
    "We're unable to process your inquiry at the moment. Please try again later.",
  CRM_AUTH_FAILED:
    'Our service is temporarily unavailable. Please contact support if the problem persists.',
  CRM_VALIDATION_FAILED:
    'Please review your information and try again.',
  CRM_INTEGRATION_ERROR:
    "We couldn't process your inquiry right now. Please try again.",
  VALIDATION_ERROR:
    'Please review your information and try again.',
  INTERNAL_SERVER_ERROR:
    'Something went wrong. Please try again.',
  SERVICE_UNAVAILABLE:
    'Service temporarily unavailable.',
  NOT_FOUND:
    'Requested service unavailable.',
};

/* ---------- HTTP status map ---------- */

const HTTP_STATUS_MAP: Record<number, string> = {
  400: 'Please review your information.',
  401: 'Service temporarily unavailable.',
  403: 'Service temporarily unavailable.',
  404: 'Requested service unavailable.',
  408: 'Request timed out.',
  422: 'Please review your information.',
  429: 'Too many requests. Please wait a moment and try again.',
  500: 'Something went wrong. Please try again.',
  502: 'Temporary server issue.',
  503: 'Service temporarily unavailable.',
  504: 'Request timed out.',
};

/* ---------- constants ---------- */

const NETWORK_ERROR_MESSAGE =
  'Please check your internet connection and try again.';
const UNKNOWN_ERROR_MESSAGE = 'Something went wrong. Please try again.';

/* ---------- public API ---------- */

/**
 * Map a backend error code to a user-friendly message.
 * Falls back to UNKNOWN_ERROR_MESSAGE when the code is not recognised.
 */
export function mapErrorCode(code: string | undefined | null): string {
  if (!code) return UNKNOWN_ERROR_MESSAGE;
  return ERROR_CODE_MAP[code] ?? UNKNOWN_ERROR_MESSAGE;
}

/**
 * Map an HTTP status code to a user-friendly message.
 * Falls back to UNKNOWN_ERROR_MESSAGE when the status is not recognised.
 */
export function mapHttpStatus(status: number): string {
  return HTTP_STATUS_MAP[status] ?? UNKNOWN_ERROR_MESSAGE;
}

/**
 * Derive a user-facing message from an API response.
 *
 * Priority:
 *  1. Backend error code (data.code) → error-code map
 *  2. Backend error string from a 4xx (data.error) — shown verbatim
 *     (validation failures already carry user-friendly text from the server)
 *  3. HTTP status code → HTTP-status map
 *  4. Fallback
 */
export function getApiErrorMessage(
  status: number,
  body: ApiErrorBody | null | undefined,
): string {
  if (body?.code) {
    return mapErrorCode(body.code);
  }

  /* Validation errors (400) from the backend carry a user-safe error string. */
  if (body?.error && status >= 400 && status < 500) {
    return body.error;
  }

  return mapHttpStatus(status);
}

/**
 * Map a JavaScript / network error to a user-friendly message.
 *
 * Handles:
 *  - TypeError (fetch failure, DNS failure, connection refused)
 *  - DOMException / AbortError (timeout via AbortController)
 *  - Everything else
 */
export function getNetworkErrorMessage(error: unknown): string {
  if (error instanceof TypeError) {
    // fetch throws TypeError on network failures, DNS errors, etc.
    return NETWORK_ERROR_MESSAGE;
  }

  if (
    error instanceof DOMException &&
    (error.name === 'AbortError' || error.name === 'TimeoutError')
  ) {
    return 'The request timed out. Please check your connection and try again.';
  }

  if (error instanceof Error) {
    const lower = error.message.toLowerCase();
    if (
      lower.includes('fetch') ||
      lower.includes('network') ||
      lower.includes('offline') ||
      lower.includes('dns') ||
      lower.includes('econnrefused') ||
      lower.includes('enotfound')
    ) {
      return NETWORK_ERROR_MESSAGE;
    }
  }

  return UNKNOWN_ERROR_MESSAGE;
}

/**
 * Full-pipeline helper: given an API response + optional body + optional
 * JS error, return the appropriate user-friendly message.
 *
 * Use this when you have all three signals available.
 */
export function resolveErrorMessage(
  response: Response | null,
  body: ApiErrorBody | null | undefined,
  networkError: unknown,
): string {
  /* Network / fetch-level failure takes precedence. */
  if (networkError) {
    return getNetworkErrorMessage(networkError);
  }

  /* API-level failure. */
  if (response && !response.ok) {
    return getApiErrorMessage(response.status, body);
  }

  return UNKNOWN_ERROR_MESSAGE;
}
