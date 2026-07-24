import { Router } from 'express';
import {
  handleContactPost,
  handleRoot,
} from '../controllers/contactController.js';
import { validate } from '../middleware/validation.js';
import { ROUTES } from '../config/constants.js';
import type { ValidationRule } from '../utils/validators.js';

const contactValidationRules: ValidationRule[] = [
  { field: 'name', required: true, type: 'string', minLength: 1, maxLength: 100 },
  { field: 'email', required: true, type: 'email' },
  { field: 'message', required: true, type: 'string', minLength: 1, maxLength: 5000 },
  { field: 'phone', required: false, type: 'string', maxLength: 20 },
];

const router = Router();

router.get(ROUTES.root, handleRoot);
router.post(
  ROUTES.contact,
  validate(contactValidationRules, {
    errorMessage: 'name, email, and message are required',
  }),
  handleContactPost,
);

export default router;
