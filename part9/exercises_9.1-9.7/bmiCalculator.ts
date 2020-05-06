interface MultiplyValues {
  value1: number;
  value2: number;
}

const parseArguments = (args: Array<string>): MultiplyValues => {
  if (args.length < 4) throw new Error("Usage: command line argument missing");
  if (args.length > 4)
    throw new Error("Usage: too many command line arguments");

  if (!isNaN(Number(args[2])) && !isNaN(Number(args[3]))) {
    return {
      value1: Number(args[2]),
      value2: Number(args[3]),
    };
  } else {
    throw new Error("Usage: values provided are not numbers");
  }
};

export const calculateBmi = (height: number, weight: number): string => {
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

// try {
//   const { value1, value2 } = parseArguments(process.argv);
//   console.log(calculateBmi(value1, value2));
// } catch (e) {
//   console.log("Something bad happened, message: ", e.message);
// }
