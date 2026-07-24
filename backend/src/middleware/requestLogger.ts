import type { Request, Response, NextFunction } from 'express';
import { logger } from '../utils/logger.js';

export function requestLogger(
  req: Request,
  res: Response,
  next: NextFunction,
): void {
  const start = performance.now();
  const timestamp = new Date().toISOString();
  const { method, originalUrl } = req;

  res.on('finish', () => {
    const duration = (performance.now() - start).toFixed(2);
    const { statusCode } = res;

    logger.info(
      `[${timestamp}] ${method} ${originalUrl} → ${statusCode} (${duration}ms)`,
    );
  });

  next();
}
