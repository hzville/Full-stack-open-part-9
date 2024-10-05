import express from 'express';
import { Response } from 'express';
import { NonSensitivePatientData } from '../types';
import patientsService from '../services/patientsService';
import validateNewPatientObject from '../utils/utils';

const router = express.Router();

router.get('/', (_req, res: Response<NonSensitivePatientData[]>) => {
  res.send(patientsService.getNonSensitivePatientData());
});

router.post('/', (req, res) => {
  try {
    const newPatientEntry = validateNewPatientObject(req.body);
    const addedPatient = patientsService.addNewPatient(newPatientEntry);
    res.json(addedPatient);

  } catch (error: unknown) {
    let errorMessage = 'Error adding new patient';
    if (error instanceof Error) {
      errorMessage += ' Error was: ' + error.message;
    }
    res.status(400).send(errorMessage);
  }
});

export default router;