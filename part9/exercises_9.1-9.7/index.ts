import express from "express";
import calculateBmi from "./bmiCalculator";
import exerciseCalculator from "./exerciseCalculator";
import { isNumber } from "util";

const app = express();
app.use(express.json());

app.get("/hello", (_req, res) => {
  res.send("Hello Full Stack!");
});

app.get("/bmi", (req, res) => {
  const height = Number(req.query.height);
  const weight = Number(req.query.weight);

  if (isNaN(height) || isNaN(weight)) {
    res.json({
      error: "malformatted parameters",
    });
  }

  const bmi = calculateBmi(height, weight);

  res.json({
    height,
    weight,
    bmi,
  });
});

app.post("/exercises", (req, res) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const body: any = req.body;
  const target = body.target;
  const dailyExercise = body.daily_exercises;

  if (!body.target || !body.daily_exercises) {
    return res.json({
      error: "malformatted parameters",
    });
  }

  if (isNaN(body.target)) {
    return res.status(400).json({
      error: "malformatted parameters",
    });
  }

  if (!Array.isArray(dailyExercise)) {
    return res.status(400).json({
      error: "malformatted parameters",
    });
  }

  if (!dailyExercise.every(isNumber)) {
    return res.status(400).json({
      error: "malformatted parameters",
    });
  }

  const result = exerciseCalculator(target, dailyExercise);

  return res.json(result);
});

const PORT = 3003;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
