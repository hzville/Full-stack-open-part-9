import {
  parseArguments,
  getTraningDays,
  getAverageTraningTime,
  getSuccessResult,
  getRating,
  getRatingDescription
} from './utils/exerciseCalcUtils';

interface Result { 
  periodLength: number,
  trainingDays: number,
  success: boolean,
  rating: number,
  ratingDescription: string,
  target: number,
  average: number
}

const calculateExercises = (exerciseHours: number[], targetAmount: number): Result => {
  return { 
    periodLength: exerciseHours.length,
    trainingDays: getTraningDays(exerciseHours),
    success: getSuccessResult(exerciseHours, targetAmount),
    rating: getRating(exerciseHours),
    ratingDescription: getRatingDescription(exerciseHours),
    target: targetAmount,
    average: getAverageTraningTime(exerciseHours)
  };
};

try {
  const {hoursArray, target} = parseArguments(process.argv);
  console.log(calculateExercises(hoursArray, target));
} catch (error: unknown) {
  let errorMessage = 'Error calculating exercises. ';
  if (error instanceof Error){
    errorMessage += error.message;
  }
  console.log(errorMessage);
}
