import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
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
