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
const REQUEST_TIMEOUT = 15_000; // 15 seconds

export async function sendContactMessage(payload: ContactPayload) {
  if (!backendUrl) {
    throw new Error('VITE_BACKEND_URL is not configured');
  }

  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), REQUEST_TIMEOUT);

  let response: Response;

  try {
    response = await fetch(`${backendUrl}/api/contact`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
      signal: controller.signal,
    });
  } catch (err) {
    clearTimeout(timer);
    if (err instanceof DOMException && err.name === 'AbortError') {
      throw new Error('The request timed out. Please check your connection and try again.');
    }
    throw new Error(getNetworkErrorMessage(err));
  }

  clearTimeout(timer);

  const body: ApiErrorBody | undefined = await response.json().catch(() => undefined);

  if (!response.ok) {
    throw new Error(getApiErrorMessage(response.status, body));
  }

  return body ?? {};
}
