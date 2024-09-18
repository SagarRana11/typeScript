import express from 'express';
const router = express.Router();
import patientServies from '../services/patientServies';
import { newPatientEntry } from '../utils';
router.get('/', (_req, res)=>{
    res.send(patientServies.getAllPatient());
});

router.post('/', (_req, res)=>{
    try {
        const newPatient = newPatientEntry(_req.body);
        const addedEntry = patientServies.addPatient(newPatient);
        res.json(addedEntry);
    } catch (error) {
        let errorMessage = 'Something went wrong.';
        if (error instanceof Error) {
        errorMessage += ' Error: ' + error.message;
        }
        res.status(400).send(errorMessage);
    }
});

export default router;