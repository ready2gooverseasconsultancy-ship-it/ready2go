export interface ValidationRule {
  field: string;
  required?: boolean;
  type?: 'string' | 'number' | 'boolean' | 'email';
  minLength?: number;
  maxLength?: number;
  pattern?: RegExp;
  message?: string;
}

export interface ValidationError {
  field: string;
  message: string;
}

export function validateBody(
  body: Record<string, unknown>,
  rules: ValidationRule[],
): ValidationError[] {
  const errors: ValidationError[] = [];

  for (const rule of rules) {
    const value = body[rule.field];

    if (rule.required && (value === undefined || value === null || value === '')) {
      errors.push({
        field: rule.field,
        message: rule.message ?? `${rule.field} is required`,
      });
      continue;
    }

    if (value === undefined || value === null) {
      continue;
    }

    if (rule.type === 'string' && typeof value !== 'string') {
      errors.push({
        field: rule.field,
        message: `${rule.field} must be a string`,
      });
      continue;
    }

    if (rule.type === 'email' && typeof value === 'string') {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) {
        errors.push({
          field: rule.field,
          message: rule.message ?? `${rule.field} must be a valid email address`,
        });
      }
    }

    if (typeof value === 'string') {
      if (rule.minLength !== undefined && value.length < rule.minLength) {
        errors.push({
          field: rule.field,
          message: `${rule.field} must be at least ${rule.minLength} characters`,
        });
      }

      if (rule.maxLength !== undefined && value.length > rule.maxLength) {
        errors.push({
          field: rule.field,
          message: `${rule.field} must be at most ${rule.maxLength} characters`,
        });
      }

      if (rule.pattern && !rule.pattern.test(value)) {
        errors.push({
          field: rule.field,
          message: rule.message ?? `${rule.field} has an invalid format`,
        });
      }
    }
  }

  return errors;
}
