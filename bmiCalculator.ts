const calculateBmi = (height: number, weight: number): string => {
  if (!isNaN(height) && !isNaN(weight)) {
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
  } else {
    throw new Error('Please check the provided values!');
  }
}

console.log(calculateBmi(180, 74));
