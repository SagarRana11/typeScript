import { Gender, newPatient } from "./types";
const isString = (text: unknown): text is string=>{
    return typeof text === 'string' ||  text instanceof String;
};

const isGender= (param : string): param is Gender=>{
    return ['male', 'female', 'other'].includes(param);};
const parseName = (name: unknown): string =>{
    if(typeof name === 'string'){
        return name;
    }
    throw new Error('Invalid name type');  
};

const isDate = (date: unknown): boolean => {
    return isString(date) && !isNaN(Date.parse(date));
};

const parseDate = (date: unknown): string => {
    if (!date || !isString(date) || !isDate(date)) {
        throw new Error('Incorrect or missing date');
    }
    return date;
};

const parseSSN =(ssn: unknown):string =>{
    if(typeof ssn === 'string'){
        return ssn;
    }
    throw new Error('Invalid name type');
};  

const parseGender = (gender: unknown): Gender=>{
    if (!gender || !isString(gender) || !isGender(gender) ){
        throw new Error('Incorrect or missing gender');
    }
    return gender;
};

const parseOccupation = (occupation: unknown): string =>{
    if(typeof occupation === 'string'){
        return occupation;
    }
    throw new Error('Invalid name type');
};



export const newPatientEntry = (object: unknown): newPatient=>{
    if(!object || typeof object !=='object'){
        throw new Error('Incorrect or missing data');
    }
    
    if ('name' in object && 'dateOfBirth' in object && 'ssn' in object && 'gender' in object && 'occupation' in object) {
        const entry: newPatient = {
            name: parseName(object.name),
            dateOfBirth: parseDate(object.dateOfBirth),
            ssn: parseSSN(object.ssn),
            gender: parseGender(object.gender),
            occupation: parseOccupation(object.occupation),
        };
        return entry;
    }
    throw new Error('Incorrect data: some fields are missing');  
};

