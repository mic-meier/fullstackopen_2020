import React from "react";

const Content = ({ course }) => {
  const parts = course.parts;
  return (
    <div>
      {parts.map(part => (
        <p key={part.id}>
          {part.name}: {part.exercises}
        </p>
      ))}
    </div>
  );
};

export default Content;
