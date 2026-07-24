import type { Request, Response, NextFunction } from 'express';
import { logger } from '../utils/logger.js';
import { ERROR_CODES, HTTP_STATUS } from '../config/constants.js';

export interface AppError extends Error {
  statusCode?: number;
  code?: string;
}

export function errorHandler(
  err: AppError,
  _req: Request,
  res: Response,
  _next: NextFunction,
): void {
  logger.error('Unhandled error:', err.message);

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
  });
}
