import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import { Resend } from 'resend';

const app = express();
const port = Number(process.env.PORT ?? 4000);
const resendApiKey = process.env.RESEND_API_KEY;
const resendFrom = process.env.RESEND_FROM_EMAIL ?? 'Ready2Go Overseas <no-reply@ready2gooverseas.com>';
const contactToEmail = process.env.CONTACT_TO_EMAIL ?? 'info@ready2gooverseas.com';
const frontendOrigin = process.env.FRONTEND_ORIGIN ?? 'https://www.ready2gooverseas.com';
const resend = resendApiKey ? new Resend(resendApiKey) : null;

app.use(
  cors({
    origin: frontendOrigin,
  }),
);
app.use(express.json());

app.get('/api/health', (_req, res) => {
  res.json({status: 'ok'});
});

app.get('/api', (_req, res) => {
  res.json({
    message: 'Backend is running',
  });
});

app.post('/api/contact', async (req, res) => {
  const { name, email, phone, message } = req.body ?? {};

  if (!name || !email || !message) {
    return res.status(400).json({
      error: 'name, email, and message are required',
    });
  }

  if (!resend) {
    return res.status(500).json({
      error: 'RESEND_API_KEY is not configured',
    });
  }

  try {
    const result = await resend.emails.send({
      from: resendFrom,
      to: contactToEmail,
      subject: `New website enquiry from ${name}`,
      replyTo: email,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone ?? 'Not provided'}</p>
        <p><strong>Message:</strong></p>
        <p>${String(message).replace(/\n/g, '<br />')}</p>
      `,
    });

    return res.json({
      ok: true,
      id: result.data?.id ?? null,
    });
  } catch (error) {
    console.error('Failed to send contact email:', error);
    return res.status(500).json({
      error: 'Failed to send email',
    });
  }
});

app.listen(port, '0.0.0.0', () => {
  console.log(`Backend server running on http://localhost:${port}`);
});
