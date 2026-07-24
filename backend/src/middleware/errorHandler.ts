import type { Request, Response, NextFunction } from 'express';
import { logger } from '../utils/logger.js';
import { ERROR_CODES, HTTP_STATUS } from '../config/constants.js';

export interface AppError extends Error {
  statusCode?: number;
  code?: string;
}

export function errorHandler(
  err: AppError,
  req: Request,
  res: Response,
  _next: NextFunction,
): void {
  const requestId = req.headers['x-request-id'] as string ?? 'unknown';

  logger.error(
    `[${requestId}] Unhandled error:`,
    err.message,
    envSupportsStack() ? err.stack : undefined,
  );

  const statusCode = err.statusCode ?? HTTP_STATUS.INTERNAL_SERVER_ERROR;
  const code = err.code ?? ERROR_CODES.INTERNAL_SERVER_ERROR;
  const message =
    statusCode === HTTP_STATUS.INTERNAL_SERVER_ERROR
      ? 'Something went wrong.'
      : err.message;

  res.status(statusCode).json({
    success: false,
    message,
    code,
    ...(requestId ? { requestId } : {}),
  });
}

function envSupportsStack(): boolean {
  return process.env.NODE_ENV !== 'production';
}
