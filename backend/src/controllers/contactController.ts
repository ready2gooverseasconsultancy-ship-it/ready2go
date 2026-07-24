import type { Request, Response } from 'express';
import { processInquiry } from '../services/contactService.js';
import { CRM_ERROR_CODES, HTTP_STATUS } from '../config/constants.js';
import type { ContactRequest } from '../types/index.js';

export async function handleContactPost(
  req: Request,
  res: Response,
): Promise<void> {
  const body = req.body as Record<string, unknown>;

  const contact: ContactRequest = {
    name: String(body.name ?? ''),
    email: String(body.email ?? ''),
    phone: body.phone ? String(body.phone) : undefined,
    visaType: body.visaType ? String(body.visaType) : undefined,
    preferredCountry: body.preferredCountry ? String(body.preferredCountry) : undefined,
    message: String(body.message ?? ''),
  };

  const result = await processInquiry(contact);

  if (!result.success) {
    if (result.code === CRM_ERROR_CODES.CRM_DISABLED) {
      res.status(HTTP_STATUS.SERVICE_UNAVAILABLE).json({
        success: false,
        message: result.error ?? 'Inquiry service is currently unavailable.',
        code: CRM_ERROR_CODES.CRM_DISABLED,
      });
      return;
    }

    res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({
      error: result.error ?? 'Failed to process inquiry',
    });
    return;
  }

  res.json({
    ok: true,
    id: result.referenceId ?? null,
  });
}

export function handleHealth(_req: Request, res: Response): void {
  res.json({ status: 'ok' });
}

export function handleRoot(_req: Request, res: Response): void {
  res.json({ message: 'Backend is running' });
}
