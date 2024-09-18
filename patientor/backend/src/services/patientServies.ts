import patientData from "../../data/patient";
import { newPatient, Patient } from "../types";
import diagnosticData from "../../data/diagnostic";
import {Diagnosis} from '../types';
import { releventDiagnosisDetail } from "../types";
import { releventPatientDetails } from "../types";
import { v4 as uuid } from 'uuid';

const data: Patient[] = patientData;
const getAllPatient =():releventPatientDetails[]=>{
    return data.map(({id, name, dateOfBirth, gender })=>({
        id,
        name,
        dateOfBirth,
        gender,
    }));
};

const addPatient = (entry : newPatient): Patient=>{
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call
    const id = uuid();
    const newPatientEntry:Patient = {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        id,
        ...entry
    };
    data.push(newPatientEntry);
    return newPatientEntry;
};

const getReleventDiagnosesList =():releventDiagnosisDetail[]=>{
    return diagnosticData;
};

const getDiagnosesList =():Diagnosis[]=>{
    return diagnosticData;
};

export default{
   getAllPatient,
   getDiagnosesList,
   getReleventDiagnosesList,
   addPatient
};