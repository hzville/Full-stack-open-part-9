import express from 'express';
import { Request, Response } from 'express';
import { NonSensitivePatientData, NewPatientObject, Patient } from '../types';
import patientsService from '../services/patientsService';
import {validateNewPatientObject} from '../utils/utils';
import { z } from 'zod';

const router = express.Router();

router.get('/', (_req, res: Response<NonSensitivePatientData[]>) => {
  res.send(patientsService.getNonSensitivePatientData());
});

router.get('/:id', (req, res) =>   {
  const patient = patientsService.getPatientById(req.params.id);
  res.json(patient);
});

router.post('/', (req: Request<unknown, unknown, NewPatientObject>, res: Response<Patient | { error: unknown } >) => {
  try {
    const newPatientEntry = validateNewPatientObject(req.body);
    const addedPatient = patientsService.addNewPatient(newPatientEntry);
    res.json(addedPatient);

  } catch (error: unknown) {
    const errorMessage = 'Error adding new patient';
    if (error instanceof z.ZodError){
      res.status(400).send({ error: error.issues });
    } else {
    res.status(400).send({error: errorMessage});
    }
  }
});

export default router;