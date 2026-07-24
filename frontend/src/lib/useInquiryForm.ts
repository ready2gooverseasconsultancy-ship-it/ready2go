import { useState, useCallback } from 'react';
import { sendContactMessage, type ContactPayload } from './contactApi';

export type FormStatus = 'idle' | 'sending' | 'success' | 'error';

export function useInquiryForm() {
  const [status, setStatus] = useState<FormStatus>('idle');
  const [error, setError] = useState('');

  const submit = useCallback(async (payload: ContactPayload): Promise<boolean> => {
    if (status === 'sending') return false;

    setStatus('sending');
    setError('');

    try {
      await sendContactMessage(payload);
      setStatus('success');
      return true;
    } catch (err) {
      setStatus('error');
      setError(err instanceof Error ? err.message : 'Failed to send message');
      return false;
    }
  }, [status]);

  const reset = useCallback(() => {
    setStatus('idle');
    setError('');
  }, []);

  return { status, error, submit, reset } as const;
}
