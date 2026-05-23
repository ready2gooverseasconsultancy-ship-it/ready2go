import 'dotenv/config';
import express from 'express';

const app = express();
const port = Number(process.env.PORT ?? 4000);

app.use(express.json());

app.get('/api/health', (_req, res) => {
  res.json({status: 'ok'});
});

app.get('/api', (_req, res) => {
  res.json({
    message: 'Backend is running',
  });
});

app.listen(port, '0.0.0.0', () => {
  console.log(`Backend server running on http://localhost:${port}`);
});
