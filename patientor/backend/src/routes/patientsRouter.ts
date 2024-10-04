import express from 'express';
import { Response } from 'express';
import { NonSensitivePatientData } from '../types';
import patientsService from '../services/patientsService';

const router = express.Router();

router.get('/', (_req, res: Response<NonSensitivePatientData[]>) => {
  res.send(patientsService.getNonSensitivePatientData());
});

export default router;