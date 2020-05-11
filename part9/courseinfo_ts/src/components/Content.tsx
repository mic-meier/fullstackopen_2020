import React from "react";

interface CourseParts {
  courseParts: Course[];
}

interface Course {
  name: string;
  exerciseCount: number;
}

const Content: React.FC<CourseParts> = ({ courseParts }) => {
  const courses = courseParts.map((course: Course, i: number) => (
    <p key={i}>
      {course.name} {course.exerciseCount}
    </p>
  ));

  return <>{courses}</>;
};

export default Content;
