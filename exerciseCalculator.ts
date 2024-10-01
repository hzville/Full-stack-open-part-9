
type ExerciseHoursArray = number[];

interface Result { 
  periodLength: number,
  trainingDays: number,
  success: boolean,
  rating: number,
  ratingDescription: string,
  target: number,
  average: number
}

const getPeriodLength = (exerciseHours: ExerciseHoursArray): number => {
  return exerciseHours.length;
}

const getTraningDays = (exerciseHours: ExerciseHoursArray): number => {
  const listOfTraningDays = exerciseHours.filter(value => value > 0);
  return listOfTraningDays.length;
}

const getAverageTraningTime = (exerciseHours: ExerciseHoursArray): number => {
  const traningDays = getPeriodLength(exerciseHours);
  const traningHoursTotal = exerciseHours.reduce((acc, cur) => acc + cur, 0);
  return traningHoursTotal / traningDays;
}

const getSuccessResult = (exerciseHours: ExerciseHoursArray, target: number): boolean => {
  const averageTraningTime = getAverageTraningTime(exerciseHours);
  return averageTraningTime >= target;
}

const getRating = (exerciseHours: ExerciseHoursArray): number => {
  const avg = getAverageTraningTime(exerciseHours);
  switch(true){
    case avg < 1.3:
      return 1;
      break;
    case avg < 2.3:
      return 2;
      break;
    case avg >= 2.3:
      return 3;
      break;
    default:
      throw new Error(`Error calculating exercise rating for value ${avg}`);
    }
  return 1
}

const getRatingDescription = (exerciseHours: ExerciseHoursArray): string => {
  const rating = getRating(exerciseHours);
  switch(rating) {
    case 1:
      return 'Below average, please do more exercise';
      break;
    case 2:
      return 'Good, keep on going';
      break;   
    case 3:
      return 'Excellent results';
      break;
    default:
      throw new Error(`Error getting description for ratings ${rating}`);
  }
} 

const calculateExercises = (exerciseHours: ExerciseHoursArray, targetAmount: number): Result => {
  return { 
    periodLength: exerciseHours.length,
    trainingDays: getTraningDays(exerciseHours),
    success: getSuccessResult(exerciseHours, targetAmount),
    rating: getRating(exerciseHours),
    ratingDescription: getRatingDescription(exerciseHours),
    target: targetAmount,
    average: getAverageTraningTime(exerciseHours)
  }
}

try {
  calculateExercises([3, 0, 2, 4.5, 0, 3, 1],2);
} catch (error: unknown) {
  let errorMessage = 'Error calculating exercises. ';
  if (error instanceof Error) {
    errorMessage += error.message;
  }
  console.log(errorMessage);
}
