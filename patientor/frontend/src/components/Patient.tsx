import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import patientService from '../services/patientsService';
import { Diagnosis, Patient as PatientType } from '../types';
import diagnosisService from '../services/diagnosisService';

const Patient = () => {
  const id = useParams().id;
  const [patient, setPatient] = useState<PatientType>();
  const [diagnoses, setDiagnoses] = useState<Diagnosis[]>();

  useEffect(() => {
    if (!id) return;
    const getPatientById = async () => {  
      const result = await patientService.getPatientById(id);
      setPatient(result);
    };
    const getDiagnoses = async () => {
      const result = await diagnosisService.getDiagnoses();
      setDiagnoses(result);
    };
    getPatientById();
    getDiagnoses();
  },[id]);

  const findDiagDesc = (code: string) => {
    const diagnosis = diagnoses?.find((diag) => diag.code === code);
    return diagnosis ? diagnosis.name : "Unknown diagnosis code";
  };

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
        <br/>
        <b>Entries:</b>
        <>
          {patient.entries.map((entry) => (
            <div style={{border: '1px solid'}}>
              <b>Date:</b> {entry.date} 
              <br/>
              <b>Description:</b> {entry.description} 
              <br/>
              {entry.diagnosisCodes?.map((code) => (
                <li>{code} : {findDiagDesc(code)}</li>
              ))}
              <br/>
            </div>
          ))}
        </>
      </CardContent>
    </Card>
  );
};

export default Patient;
