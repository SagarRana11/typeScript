import express, { Request, Response, NextFunction } from 'express';
import { NewEntrySchema } from '../utils';
import diaryServices from '../services/diaryServices';
import { newDiaryEntry, DiaryEntry } from '../types';
import { z } from 'zod';

const router = express.Router();

// Route to get non-sensitive entries
router.get("/", (_req, res) => {
  res.send(diaryServices.getNonSensitiveEntires());
});

// Route to get a diary entry by ID
router.get('/:id', (req, res) => {
  const diary = diaryServices.findById(Number(req.params.id));
  if (diary) {
    res.send(diary);
  } else {
    res.sendStatus(404);
  }
});

// Middleware to validate new diary entry
const newDiaryParser = (req: Request, res: Response, next: NextFunction) => {
  try {
    NewEntrySchema.parse(req.body);
    console.log(req.body);
    next();
  } catch (error) {
    next(error);
  }
};

// Error handling middleware
const errorMiddleware = (error: unknown, _req: Request, res: Response, next: NextFunction) => {
  if (error instanceof z.ZodError) {
    res.status(400).send({ error: error.issues });
  } else {
    next(error);
  }
};

// POST route to add a new diary entry
router.post('/', newDiaryParser, (req: Request<unknown, unknown, newDiaryEntry>, res: Response<DiaryEntry>) => {
  const addedEntry = diaryServices.addDiary(req.body);
  res.json(addedEntry);
});

// Apply error middleware after all routes
router.use(errorMiddleware);

export default router;
