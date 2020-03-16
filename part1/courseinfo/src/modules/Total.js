import React from "react";

const Total = ({ course }) => {
  const parts = course.parts;
  const total = parts.reduce(
    (accumulator, current) => accumulator + current.exercises,
    0
  );

  return (
    <div>
      <p>
        <b>Number of exercises: {total}</b>
      </p>
    </div>
  );
};

export default Total;
