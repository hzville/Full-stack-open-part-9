import express from 'express';
import { calculateBmi } from './bmiCalculator';
import { calculateExercises } from './exerciseCalculator';
const app = express();
app.use(express.json());

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

app.post('/exercises', (req, res) => {
  const dailyExercises: number[] = req.body.daily_exercises;
  const target = Number(req.body.target);
  if (dailyExercises == null || target == null){
    res.status(400).send({error: "parameters missing"});
  }

  if (!Array.isArray(dailyExercises)|| !dailyExercises.every(num => typeof num === 'number')){
    res.status(400).send({error: "malformatted parameters"});
  }

  if (isNaN(target)){
    res.status(400).send({error: "malformatted parameters"});
  }
  const result = calculateExercises(dailyExercises, target);
  res.status(200).send(result);
});

const PORT = 3003;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});         