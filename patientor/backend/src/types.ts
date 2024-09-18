export interface Patient{
    id: string,
    name: string,
    dateOfBirth:string,
    gender: Gender,
    ssn: string,
    occupation: string,
}

export interface Diagnosis{
    code: string,
    name: string,
    latin?:string,
}
export enum Gender{
    Male = 'male',
    Female = 'female',
    Others = 'others',
}


export type releventPatientDetails = Omit<Patient, 'occupation' | 'ssn'>;
export type releventDiagnosisDetail = Omit<Diagnosis, 'latin'>;
export type newPatient = Omit<Patient, 'id'>;