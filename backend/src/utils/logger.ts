type LogLevel = 'debug' | 'info' | 'warn' | 'error';

const LOG_LEVELS: Record<LogLevel, number> = {
  debug: 0,
  info: 1,
  warn: 2,
  error: 3,
};

const currentLevel: LogLevel =
  (process.env.LOG_LEVEL as LogLevel) ?? 'info';

function shouldLog(level: LogLevel): boolean {
  return LOG_LEVELS[level] >= LOG_LEVELS[currentLevel];
}

function formatTimestamp(): string {
  return new Date().toISOString();
}

function sanitizeArgs(
  args: unknown[],
): unknown[] {
  return args.map((arg) => {
    if (isSensitive(arg)) {
      return '[REDACTED]';
    }
    return arg;
  });
}

const SENSITIVE_PATTERNS = [
  /^(sk|pk|rk|rs|AKIA|wJalrX)[A-Za-z0-9]{16,}/,
  /(api[_-]?key|secret|token|password|auth)[=:]\s*\S+/i,
  /^[A-Za-z0-9+/]{40,}(={0,2})$/,
];

function isSensitive(value: unknown): boolean {
  if (typeof value !== 'string' || value.length < 20) {
    return false;
  }
  return SENSITIVE_PATTERNS.some((pattern) => pattern.test(value));
}

export const logger = {
  debug(...args: unknown[]): void {
    if (!shouldLog('debug')) return;
    console.debug(`[${formatTimestamp()}] [DEBUG]`, ...sanitizeArgs(args));
  },

  info(...args: unknown[]): void {
    if (!shouldLog('info')) return;
    console.info(`[${formatTimestamp()}] [INFO]`, ...sanitizeArgs(args));
  },

  warn(...args: unknown[]): void {
    if (!shouldLog('warn')) return;
    console.warn(`[${formatTimestamp()}] [WARN]`, ...sanitizeArgs(args));
  },

  error(...args: unknown[]): void {
    if (!shouldLog('error')) return;
    console.error(`[${formatTimestamp()}] [ERROR]`, ...sanitizeArgs(args));
  },
};
