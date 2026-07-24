export const API_PREFIX = '/api';

export const ROUTES = {
  health: `${API_PREFIX}/health`,
  root: API_PREFIX,
  contact: `${API_PREFIX}/contact`,
} as const;

export const ERROR_CODES = {
  VALIDATION_ERROR: 'VALIDATION_ERROR',
  INTERNAL_SERVER_ERROR: 'INTERNAL_SERVER_ERROR',
  SERVICE_UNAVAILABLE: 'SERVICE_UNAVAILABLE',
  NOT_FOUND: 'NOT_FOUND',
} as const;

/** CRM-specific error codes returned to callers. */
export const CRM_ERROR_CODES = {
  CRM_UNAVAILABLE: 'CRM_UNAVAILABLE',
  CRM_TIMEOUT: 'CRM_TIMEOUT',
  CRM_AUTH_FAILED: 'CRM_AUTH_FAILED',
  CRM_VALIDATION_FAILED: 'CRM_VALIDATION_FAILED',
  CRM_INTEGRATION_ERROR: 'CRM_INTEGRATION_ERROR',
  CRM_DISABLED: 'CRM_DISABLED',
} as const;

export const INTEGRATION_ERROR_CODES = {
  INTEGRATION_UNAVAILABLE: 'INTEGRATION_UNAVAILABLE',
  INTEGRATION_FAILED: 'INTEGRATION_FAILED',
  PROVIDER_NOT_CONFIGURED: 'PROVIDER_NOT_CONFIGURED',
} as const;

export const INTEGRATION_PROVIDERS = {
  CRM: 'crm',
  WEBHOOK: 'webhook',
  QUEUE: 'queue',
} as const;

export const HTTP_STATUS = {
  OK: 200,
  BAD_REQUEST: 400,
  NOT_FOUND: 404,
  INTERNAL_SERVER_ERROR: 500,
  SERVICE_UNAVAILABLE: 503,
} as const;

/** CRM API endpoint paths (appended to the base URL). */
export const CRM_API_PATHS = {
  leadInquiries: '/api/v1/lead-inquiries',
} as const;
