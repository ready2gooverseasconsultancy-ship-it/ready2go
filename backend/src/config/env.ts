export interface EnvConfig {
  readonly port: number;
  readonly frontendOrigin: string;
  readonly nodeEnv: string;

  /** Master switch — when false the CRM call is skipped and a placeholder success is returned. */
  readonly crmEnabled: boolean;
  /** CRM API base URL (required when CRM_ENABLED=true). */
  readonly crmBaseUrl: string | undefined;
  /** CRM API key sent as Bearer token (required when CRM_ENABLED=true). */
  readonly crmApiKey: string | undefined;
  /** Request timeout in milliseconds (default: 10000). */
  readonly crmTimeout: number;
  /** Max retries for transient failures (default: 3). */
  readonly crmRetryCount: number;
  /** Base delay in ms between retries (doubled each attempt — exponential backoff). */
  readonly crmRetryDelay: number;
}

function fail(message: string): never {
  throw new Error(`Environment configuration error: ${message}`);
}

function loadEnv(): EnvConfig {
  /* ---------- generic ---------- */
  const port = Number(process.env.PORT ?? 4000);
  if (!Number.isFinite(port) || port < 0 || port > 65535) {
    fail(`PORT "${process.env.PORT}" must be a number between 0 and 65535.`);
  }

  const crmEnabled = process.env.CRM_ENABLED !== 'false';

  /* ---------- CRM (required when enabled) ---------- */
  const crmBaseUrl = process.env.CRM_BASE_URL || undefined;
  const crmApiKey = process.env.CRM_API_KEY || undefined;

  if (crmEnabled) {
    if (!crmBaseUrl) {
      fail('CRM_BASE_URL is required when CRM_ENABLED=true.');
    }
    if (!crmBaseUrl.startsWith('https://')) {
      fail('CRM_BASE_URL must use HTTPS.');
    }
    if (!crmApiKey) {
      fail('CRM_API_KEY is required when CRM_ENABLED=true.');
    }
  }

  /* ---------- CRM tuning (optional, have defaults) ---------- */
  const crmTimeout = Number(process.env.CRM_TIMEOUT ?? 10000);
  if (!Number.isFinite(crmTimeout) || crmTimeout < 0) {
    fail(`CRM_TIMEOUT "${process.env.CRM_TIMEOUT}" must be a non-negative number.`);
  }

  const crmRetryCount = Number(process.env.CRM_RETRY_COUNT ?? 3);
  if (!Number.isInteger(crmRetryCount) || crmRetryCount < 0 || crmRetryCount > 10) {
    fail(`CRM_RETRY_COUNT "${process.env.CRM_RETRY_COUNT}" must be an integer between 0 and 10.`);
  }

  const crmRetryDelay = Number(process.env.CRM_RETRY_DELAY ?? 500);
  if (!Number.isFinite(crmRetryDelay) || crmRetryDelay < 0) {
    fail(`CRM_RETRY_DELAY "${process.env.CRM_RETRY_DELAY}" must be a non-negative number.`);
  }

  return {
    port,
    frontendOrigin: process.env.FRONTEND_ORIGIN ?? 'https://www.ready2gooverseas.com',
    nodeEnv: process.env.NODE_ENV ?? 'development',
    crmEnabled,
    crmBaseUrl,
    crmApiKey,
    crmTimeout,
    crmRetryCount,
    crmRetryDelay,
  };
}

export const env = loadEnv();
