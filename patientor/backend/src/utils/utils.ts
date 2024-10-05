import { NewPatientObject, Gender } from "../types";
import { z } from 'zod';

const newPatientSchema = z.object({
  name: z.string(),
  dateOfBirth: z.string().date(),
  ssn: z.string(),
  gender: z.nativeEnum(Gender),
  occupation: z.string()
});

export const validateNewPatientObject = (object: unknown): NewPatientObject => {
  return newPatientSchema.parse(object);
};

export default validateNewPatientObject;
