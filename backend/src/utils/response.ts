import type { Response } from 'express';
import type { ApiResponse, ApiErrorResponse } from '../types/index.js';
import { HTTP_STATUS, ERROR_CODES } from '../config/constants.js';

export function sendSuccess<T>(
  res: Response,
  data: T,
  message = 'Success',
  statusCode = HTTP_STATUS.OK,
): void {
  const body: ApiResponse<T> = {
    success: true,
    message,
    data,
  };
  res.status(statusCode).json(body);
}

export function sendError(
  res: Response,
  message: string,
  code: string = ERROR_CODES.INTERNAL_SERVER_ERROR,
  statusCode: number = HTTP_STATUS.INTERNAL_SERVER_ERROR,
): void {
  const body: ApiErrorResponse = {
    success: false,
    message,
    code,
  };
  res.status(statusCode).json(body);
}
