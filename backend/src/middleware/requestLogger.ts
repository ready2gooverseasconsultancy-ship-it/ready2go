import type { Request, Response, NextFunction } from 'express';
import { logger } from '../utils/logger.js';

export function requestLogger(
  req: Request,
  res: Response,
  next: NextFunction,
): void {
  const start = performance.now();

  res.on('finish', () => {
    const duration = (performance.now() - start).toFixed(2);
    const { statusCode } = res;
    const requestId = req.headers['x-request-id'] as string ?? '-';
    const contentLength = res.getHeader('content-length') ?? '-';

    const level = statusCode >= 500 ? 'error' : statusCode >= 400 ? 'warn' : 'info';
    logger[level](
      `[${requestId}] ${req.method} ${req.originalUrl} → ${statusCode} ${contentLength} ${duration}ms`,
    );
  });

  next();
}
