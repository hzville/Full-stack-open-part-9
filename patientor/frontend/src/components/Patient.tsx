import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import patientService from '../services/patients';
import { Patient as PatientType } from '../types';

const Patient = () => {
  const id = useParams().id;
  const [patient, setPatient] = useState<PatientType>();

  useEffect(() => {
    if (!id) return;
    const getPatientById = async () => {  
      const result = await patientService.getPatientById(id);
      setPatient(result);
    };
    getPatientById();
  },[id]);

  if (!patient) {
    return(
      <Card>
      <CardContent>
        <b>Patient data not found</b>
      </CardContent>
    </Card>
    );
  }

  return (
    <Card>
      <CardContent>
        <b>Name:</b> {patient.name}
        <br/>
        <b>Gender:</b> {patient.gender}
        <br/>
        <b>Ssn:</b> {patient.ssn}
        <br/>
        <b>Date of birth:</b> {patient.dateOfBirth}
        <br/>
        <b>Occupation:</b> {patient.occupation}
      </CardContent>
    </Card>
  );
};

export default Patient;
