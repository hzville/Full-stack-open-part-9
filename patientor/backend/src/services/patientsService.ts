import patientsData from '../../data/patients';
import { Patient, NonSensitivePatientData, NewPatientObject } from '../types';
import { v4 as uuidv4 } from 'uuid';

const getPatients = (): Patient[] => {
  return patientsData;
};

const getPatientById = (id: string): Patient | undefined => {
  return patientsData.find(patient => patient.id === id);
};

const getNonSensitivePatientData = (): NonSensitivePatientData[] => {
  return patientsData.map(({id, name, dateOfBirth, gender, occupation}) => ({
    id, name, dateOfBirth, gender, occupation
  }));
};

const addNewPatient = (entry: NewPatientObject): Patient => {
  const newPatientObject = {
    id: uuidv4(),
    ...entry
  };
  patientsData.push(newPatientObject);
  return newPatientObject;
};

export default {
  getPatients,
  getPatientById,
  getNonSensitivePatientData,
  addNewPatient
};