import { getApiErrorMessage, getNetworkErrorMessage } from './errorMapper';
import type { ApiErrorBody } from './errorMapper';

export type ContactPayload = {
  name: string;
  email: string;
  phone?: string;
  visaType?: string;
  preferredCountry?: string;
  message: string;
};

const backendUrl = import.meta.env.VITE_BACKEND_URL?.replace(/\/$/, '');

export async function sendContactMessage(payload: ContactPayload) {
  if (!backendUrl) {
    throw new Error('VITE_BACKEND_URL is not configured');
  }

  let response: Response;

  try {
    response = await fetch(`${backendUrl}/api/contact`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });
  } catch (err) {
    throw new Error(getNetworkErrorMessage(err));
  }

  const body: ApiErrorBody | undefined = await response.json().catch(() => undefined);

  if (!response.ok) {
    throw new Error(getApiErrorMessage(response.status, body));
  }

  return body ?? {};
}
