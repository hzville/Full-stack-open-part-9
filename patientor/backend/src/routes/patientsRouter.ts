/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import express from 'express';
import { Response } from 'express';
import { NonSensitivePatientData } from '../types';
import patientsService from '../services/patientsService';

const router = express.Router();

router.get('/', (_req, res: Response<NonSensitivePatientData[]>) => {
  res.send(patientsService.getNonSensitivePatientData());
});

router.post('/', (req, res) => {
  const { name, dateOfBirth, ssn, gender, occupation } = req.body;
  const newPatient = patientsService.addNewPatient({
    name,
    dateOfBirth,
    ssn,
    gender,
    occupation
  });
  res.send(newPatient);
});

export default router;