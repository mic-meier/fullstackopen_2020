const calculateBmi = (height: number, weight: number): string => {
  const bmi = weight / (height / 100) ** 2;

  if (bmi <= 15) {
    return "Very severely underweight";
  } else if (bmi <= 16) {
    return "Severely underweight";
  } else if (bmi <= 18.5) {
    return "Underweight";
  } else if (bmi <= 25) {
    return "Normal (healthy weight)";
  } else if (bmi <= 30) {
    return "Overweight";
  } else if (bmi <= 35) {
    return "Obese Class 1 (Moderately Obese)";
  } else if (bmi <= 40) {
    return "Obese Class II (Severely Obese";
  } else {
    return "Obese Class III (Very Severely Obese";
  }
};

console.log(calculateBmi(180, 74));
