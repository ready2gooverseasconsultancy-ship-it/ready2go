import type { Request, Response, NextFunction } from 'express';
import {
  validateBody,
  type ValidationRule,
} from '../utils/validators.js';
import { HTTP_STATUS } from '../config/constants.js';

export interface ValidationOptions {
  errorMessage?: string;
}

export function validate(
  rules: ValidationRule[],
  options?: ValidationOptions,
) {
  return (req: Request, res: Response, next: NextFunction): void => {
    const errors = validateBody(req.body ?? {}, rules);

    if (errors.length > 0) {
      const message =
        options?.errorMessage ?? errors.map((e) => e.message).join(', ');
      res.status(HTTP_STATUS.BAD_REQUEST).json({
        error: message,
      });
      return;
    }

    next();
  };
}
