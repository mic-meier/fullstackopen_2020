interface resultsObject {
  periodLength: number;
  trainingDays: number;
  success: boolean;
  rating: number;
  ratingDescription: string;
  target: number;
  average: number;
}

const exerciseCalculator = (
  target: number,
  exerciseStats: Array<number>
): resultsObject => {
  const periodLength = exerciseStats.length;
  const trainingDays = exerciseStats.filter((hours) => hours > 0).length;
  const average =
    exerciseStats.reduce((acc, curr) => acc + curr) / periodLength;
  const success = average >= target;
  let rating;
  let ratingDescription;

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
    case 2:
      ratingDescription = "Geting there, nice job!";
    case 1:
      ratingDescription = "Come on, you can do much better!";
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

console.log(exerciseCalculator(2, [3, 0, 2, 4.5, 0, 3, 1]));
