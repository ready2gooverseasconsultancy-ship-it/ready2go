import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import { env } from './config/env.js';
import { requestLogger } from './middleware/requestLogger.js';
import { errorHandler } from './middleware/errorHandler.js';
import contactRoutes from './routes/contactRoutes.js';
import { logger } from './utils/logger.js';

const app = express();

/* ---------- Security ---------- */
app.use(
  helmet({
    contentSecurityPolicy: {
      directives: {
        defaultSrc: ["'self'"],
        scriptSrc: ["'self'", "'unsafe-inline'"],
        styleSrc: ["'self'", "'unsafe-inline'", 'https://fonts.googleapis.com'],
        fontSrc: ["'self'", 'https://fonts.gstatic.com', 'data:'],
        imgSrc: ["'self'", 'https:', 'data:'],
        connectSrc: ["'self'", env.crmBaseUrl ?? ''].filter(Boolean),
        frameSrc: ["'self'", 'https://www.google.com'],
        objectSrc: ["'none'"],
        upgradeInsecureRequests: [],
      },
    },
    crossOriginEmbedderPolicy: false,
  }),
);

app.use(
  cors({
    origin: env.frontendOrigin,
  }),
);
app.use(express.json({ limit: '100kb' }));
app.use(requestLogger);

/* ---------- Rate limiting ---------- */
const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 10,                   // 10 submissions per window per IP
  standardHeaders: true,
  legacyHeaders: false,
  message: { error: 'Too many requests. Please wait and try again.' },
});

// Apply rate limiter to the contact endpoint
app.use('/api/contact', contactLimiter);

/* ---------- Static SEO routes ---------- */
app.get('/robots.txt', (_req, res) => {
  res.type('text/plain');
  res.send([
    'User-agent: *',
    'Allow: /',
    'Disallow: /api/',
    '',
    'Sitemap: https://www.ready2gooverseas.com/sitemap.xml',
  ].join('\n'));
});

app.get('/sitemap.xml', (_req, res) => {
  res.type('application/xml');
  const urls = [
    { loc: '/', priority: '1.0' },
    { loc: '/about', priority: '0.8' },
    { loc: '/services', priority: '0.9' },
    { loc: '/process', priority: '0.7' },
    { loc: '/updates', priority: '0.6' },
    { loc: '/gallery', priority: '0.5' },
    { loc: '/referral', priority: '0.6' },
    { loc: '/contact', priority: '0.8' },
    { loc: '/study-destinations', priority: '0.9' },
    { loc: '/country/study-in-usa', priority: '0.8' },
    { loc: '/country/study-in-canada', priority: '0.8' },
    { loc: '/country/study-in-uk', priority: '0.8' },
    { loc: '/country/study-in-australia', priority: '0.8' },
    { loc: '/country/study-in-germany', priority: '0.8' },
    { loc: '/country/study-in-ireland', priority: '0.8' },
    { loc: '/country/study-in-new-zealand', priority: '0.8' },
    { loc: '/country/study-in-uae', priority: '0.7' },
    { loc: '/country/study-in-singapore', priority: '0.7' },
  ];

  const today = new Date().toISOString().split('T')[0];
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(u => `  <url>
    <loc>https://www.ready2gooverseas.com${u.loc}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>${u.priority}</priority>
  </url>`).join('\n')}
</urlset>`;
  res.send(xml);
});

app.use(contactRoutes);

app.use(errorHandler);

const server = app.listen(env.port, '0.0.0.0', () => {
  logger.info(`Backend server running on http://localhost:${env.port}`);
});

function gracefulShutdown(signal: string): void {
  logger.info(`Received ${signal}. Shutting down gracefully...`);
  server.close(() => {
    logger.info('Server closed.');
    process.exit(0);
  });

  setTimeout(() => {
    logger.error('Forced shutdown after 10s timeout.');
    process.exit(1);
  }, 10_000).unref();
}

process.on('SIGTERM', () => gracefulShutdown('SIGTERM'));
process.on('SIGINT', () => gracefulShutdown('SIGINT'));

export default app;
