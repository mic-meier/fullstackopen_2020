interface ResultsObject {
  periodLength: number;
  trainingDays: number;
  success: boolean;
  rating: number;
  ratingDescription: string;
  target: number;
  average: number;
}

interface CommandLineArguments {
  value1: number;
  arr1: Array<number>;
}

const parseArgs = (args: Array<string>): CommandLineArguments => {
  let value1;
  const arr1 = [];

  if (args.length < 4) throw new Error("command line argument missing");

  if (!isNaN(Number(args[2]))) {
    value1 = Number(args[2]);
  } else {
    throw new Error("values provided are not numbers");
  }

  for (let i = 3; i < args.length; i++) {
    if (!isNaN(Number(args[i]))) {
      arr1.push(Number(args[i]));
    } else {
      throw new Error("values provided are not numbers");
    }
  }

  return {
    value1,
    arr1,
  };
};

const exerciseCalculator = (
  target: number,
  exerciseStats: Array<number>
): ResultsObject => {
  const periodLength = exerciseStats.length;
  const trainingDays = exerciseStats.filter((hours) => hours > 0).length;
  const average =
    exerciseStats.reduce((acc, curr) => acc + curr) / periodLength;
  const success = average >= target;
  let rating: number;
  let ratingDescription: string;

  if (target - average > 1) {
    rating = 1;
  } else if (target - average > 0.2) {
    rating = 2;
  } else {
    rating = 3;
  }

  switch (rating) {
    case 3:
      ratingDescription = "Awesome job!";
      break;
    case 2:
      ratingDescription = "Geting there, nice job!";
      break;
    case 1:
      ratingDescription = "Come on, you can do much better!";
      break;
    default:
      ratingDescription = "No rating available";
  }

  return {
    periodLength,
    trainingDays,
    success,
    rating,
    ratingDescription,
    target,
    average,
  };
};

try {
  const { value1, arr1 } = parseArgs(process.argv);
  console.log(exerciseCalculator(value1, arr1));
} catch (e) {
  console.log("Error, something bad happened. Usage:", e.message);
}

export default exerciseCalculator;
