import { Router } from 'express';
import {
  handleContactPost,
  handleHealth,
  handleRoot,
} from '../controllers/contactController.js';
import { validate } from '../middleware/validation.js';
import { ROUTES } from '../config/constants.js';
import type { ValidationRule } from '../utils/validators.js';

const contactValidationRules: ValidationRule[] = [
  { field: 'name', required: true, type: 'string', minLength: 1 },
  { field: 'email', required: true, type: 'email' },
  { field: 'message', required: true, type: 'string', minLength: 1 },
  {
    field: 'phone',
    required: false,
    type: 'string',
  },
];

const router = Router();

router.get(ROUTES.health, handleHealth);
router.get(ROUTES.root, handleRoot);
router.post(
  ROUTES.contact,
  validate(contactValidationRules, {
    errorMessage: 'name, email, and message are required',
  }),
  handleContactPost,
);

export default router;
