import express from 'express';
import diariesRouter from './src/routes/diaries';
import cors from 'cors';
const app = express();

app.use(express.json());
app.use(cors());
const PORT = 3000;

app.get('/ping', (_req, res) => {
  console.log('someone pinged here');
  res.send('pong');
});

app.use("/api/diaries", diariesRouter);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});