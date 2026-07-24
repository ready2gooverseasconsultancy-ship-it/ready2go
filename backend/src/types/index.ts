/* ============================================================
 * Domain DTOs
 * ============================================================ */

/** Raw inquiry payload submitted via the website contact form. */
export interface ContactRequest {
  name: string;
  email: string;
  phone?: string;
  visaType?: string;
  preferredCountry?: string;
  message: string;
}

/** Normalized inquiry payload sent downstream (transport-agnostic). */
export interface InquiryPayload {
  /** Origin source e.g. "website". */
  source: string;
  /** Server-generated UUID v4 for end-to-end tracking. */
  requestId: string;
  name: string;
  email: string;
  phone?: string;
  visaType?: string;
  preferredCountry?: string;
  message: string;
  submittedAt: string;
  metadata?: Record<string, unknown>;
}

/** Standardised result returned by integration services. */
export interface IntegrationResult {
  success: boolean;
  referenceId?: string;
  error?: string;
  code?: string;
}

/* ============================================================
 * CRM-specific DTOs
 * ============================================================ */

/** Payload sent to the downstream CRM endpoint. */
export interface CrmLeadPayload {
  request_id: string;
  full_name: string;
  email: string;
  phone: string;
  visa_type: string;
  preferred_country: string;
  message: string;
  source: string;
}

/** Response from the downstream CRM. */
export interface CrmApiResponse {
  success: boolean;
  id?: string;
  error?: string;
}

/** Headers required for every CRM API call. */
export interface CrmRequestHeaders {
  Authorization: string;
  'Content-Type': 'application/json';
  'X-Request-ID': string;
}

/* ============================================================
 * HTTP client types
 * ============================================================ */

export interface HttpClientOptions {
  method: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';
  url: string;
  headers: Record<string, string>;
  body?: unknown;
  timeout: number;
  retryCount: number;
  retryDelay: number;
}

export interface HttpClientResult {
  ok: boolean;
  status: number;
  body: unknown;
}

/* ============================================================
 * Shared response shapes
 * ============================================================ */

export interface HealthResponse {
  status: 'ok';
}

export interface ApiResponse<T = unknown> {
  success: boolean;
  message: string;
  data?: T;
}

export interface ApiErrorResponse {
  success: false;
  message: string;
  code: string;
}
