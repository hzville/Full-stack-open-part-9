interface BmiValues {
  height: number;
  weight: number;
}

const parseArguments = (args: string[]): BmiValues => {
  if (args.length != 4) throw new Error('Invalid amount of arguments, check arguments');

  if (!isNaN(Number(args[2])) && !isNaN(Number(args[3]))) {
    return {
      height: Number(args[2]),
      weight: Number(args[3])
    }
  } else {
    throw new Error('Invalid arguments type, check that numbers were provided');
  }
}

const calculateBmi = (height: number, weight: number): string => {
    const bmi: number = Math.round(weight/((height/100)**2)*100)/100;
    switch(true) {
      case (bmi <= 16):
        return 'Underweight (Severe thinness)';
      case (bmi <= 16.9):
        return 'Underweight (Moderate thinness)';
      case (bmi <= 18.4):
        return 'Underweight (Mild thinness)';
      case (bmi <= 24.9):
        return 'Normal range';
      case (bmi <= 29.9):
        return 'Overweight (Pre-obese)';
      case (bmi <= 34.9):
        return 'Obese (Class I)';
      case (bmi <= 39.9):
        return 'Obese (Class II)';
      case (bmi >= 40):
        return 'Obese (Class III)';
      default:
        return 'BMI could not be calculated';
    }
}

if (require.main === module) {
  try {
    const {height, weight} = parseArguments(process.argv);
    console.log(calculateBmi(height, weight));
  } catch (error: unknown) {
    let errorMessage = 'Error calculating BMI. ';
    if (error instanceof Error) {
      errorMessage += error.message;
    }
    console.log(errorMessage);
  }
}

export {calculateBmi};
