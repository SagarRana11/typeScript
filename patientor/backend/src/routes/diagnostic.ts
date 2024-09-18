import express from 'express';
import patientServies from '../services/patientServies';
const router = express.Router();


router.get('/', (_req, res)=>{
    res.send(patientServies.getDiagnosesList());
});

router.post('/', (_req, res)=>{
    res.send("adding diagnostic details");
});

export default router;