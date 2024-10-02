import express from 'express';
import { calculateBmi } from './bmiCalculator';
const app = express();

app.get('/hello', (_req, res) => {
  res.send('Hello Full Stack!');
});

app.get('/bmi', (_req, res) => {
  const height = Number(_req.query.height);
  const weight = Number(_req.query.weight);

  if (!isNaN(height) && !isNaN(weight)){
    const bmiResult = calculateBmi(height, weight);
    res.send({
      weight: weight,
      height: height,
      bmi: bmiResult
    });
    
  } else {
    res.status(400).send({error: "malformatted parameters"});
  }
});

const PORT = 3003;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});