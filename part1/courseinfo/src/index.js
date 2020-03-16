import React from "react";
import ReactDOM from "react-dom";

const Header = props => {
  return (
    <div>
      <h1>{props.course.name}</h1>
    </div>
  );
};

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

const Course = ({ course }) => {
  return (
    <div>
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />
    </div>
  );
};

const App = () => {
  const courses = [
    {
      name: "Half Stack application development",
      id: 1,
      parts: [
        {
          name: "Fundamentals of React",
          exercises: 10,
          id: 1
        },
        {
          name: "Using props to pass data",
          exercises: 7,
          id: 2
        },
        {
          name: "State of a component",
          exercises: 14,
          id: 3
        },
        {
          name: "Redux",
          exercises: 11,
          id: 4
        }
      ]
    },
    {
      name: "Node.js",
      id: 2,
      parts: [
        {
          name: "Routing",
          exercises: 3,
          id: 1
        },
        {
          name: "Middlewares",
          exercises: 7,
          id: 2
        }
      ]
    }
  ];

  return (
    <div>
      {courses.map((course, i) => (
        <Course key={i} course={course} />
      ))}
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
