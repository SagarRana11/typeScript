import express from 'express';
import diaryServices from '../services/diaryServices';
const router = express.Router();

router.get("/", (_req, res)=>{
    res.send(diaryServices.getNonSensitiveEntires());
});

router.post("/", (_req, res)=>{
    res.send('Saving the data');
});

export default router;
