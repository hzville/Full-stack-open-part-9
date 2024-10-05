import { NewPatientObject, Gender } from "../types";

const isString = (text: unknown): text is string => {
  return typeof text === 'string' || text instanceof String;
};

const isDate = (date: string): boolean => {
  return Boolean(Date.parse(date));
};

const isGender = (gender: string): gender is Gender => {
  return Object.values(Gender).map(gender => gender.toString()).includes(gender);
};

const parseString = (input: unknown): string => {
  if (!isString(input)) {
    throw new Error('Incorrect or missing input ' + input);
  }
  return input;
};

const parseDate = (date: unknown): string => {
  if (!isString(date) || !isDate(date)) {
    throw new Error('Incorrect or missing date ' + date);
  }
  return date;
};

const parseGender = (gender: unknown): Gender => {
  if (!isString(gender) || !isGender(gender)) {
    throw new Error('Incorrect or missing gender ' + gender);
  }
  return gender;
};

const validateNewPatientObject = (object: unknown): NewPatientObject => {
  if (!object || typeof object !== 'object'){
    throw new Error('Incorrect or missing data');
  }

  if ('name' in object && 'dateOfBirth' in object && 'ssn' in object && 'gender' in object && 'occupation' in object) {
    const newPatientObject: NewPatientObject ={
      name: parseString(object.name),
      dateOfBirth: parseDate(object.dateOfBirth),
      ssn: parseString(object.ssn),
      gender: parseGender(object.gender),
      occupation: parseString(object.occupation)
    };
    return newPatientObject;
  }
  
  throw new Error('Incorrect data, some fields are missing');
};

export default validateNewPatientObject;
