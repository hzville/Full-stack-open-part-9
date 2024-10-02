interface ExerciseValues {
  hoursArray: number[];
  target: number;
}

const parseArguments = (args: string[]): ExerciseValues => {
  if (args.length < 4) throw new Error('Too few arguments, check arguments');

  const target = Number(args[2])

  const valuesArray = args.slice(3).map(arg => {
    if (isNaN(Number(arg))){
      throw new Error('Error, argument was not a number');
    }
    return Number(arg);
  })
  
  return {
    hoursArray: valuesArray,
    target: target
  }
}

const getPeriodLength = (exerciseHours: number[]): number => {
  return exerciseHours.length;
}

const getTraningDays = (exerciseHours: number[]): number => {
  const listOfTraningDays = exerciseHours.filter(value => value > 0);
  return listOfTraningDays.length;
}

const getAverageTraningTime = (exerciseHours: number[]): number => {
  const traningDays = getPeriodLength(exerciseHours);
  const traningHoursTotal = exerciseHours.reduce((acc, cur) => acc + cur, 0);
  return traningHoursTotal / traningDays;
}

const getSuccessResult = (exerciseHours: number[], target: number): boolean => {
  const averageTraningTime = getAverageTraningTime(exerciseHours);
  return averageTraningTime >= target;
}

const getRating = (exerciseHours: number[]): number => {
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

const getRatingDescription = (exerciseHours: number[]): string => {
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

export {parseArguments, getTraningDays, getAverageTraningTime, getSuccessResult, getRating, getRatingDescription}