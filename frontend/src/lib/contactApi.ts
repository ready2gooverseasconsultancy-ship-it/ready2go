export type ContactPayload = {
  name: string;
  email: string;
  phone?: string;
  message: string;
};

const backendUrl = import.meta.env.VITE_BACKEND_URL?.replace(/\/$/, '');

export async function sendContactMessage(payload: ContactPayload) {
  if (!backendUrl) {
    throw new Error('VITE_BACKEND_URL is not configured');
  }

  const response = await fetch(`${backendUrl}/api/contact`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });

  const data = await response.json().catch(() => ({}));

  if (!response.ok) {
    throw new Error(data?.error || 'Failed to send message');
  }

  return data;
}
