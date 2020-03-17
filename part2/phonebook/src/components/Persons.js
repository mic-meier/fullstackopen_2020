import React from "react";

const Persons = props => {
  return (
    <div>
      {props.persons
        .filter(person =>
          person.name.toUpperCase().includes(props.searchName.toUpperCase())
        )
        .map(person => (
          <div key={person.name}>
            {person.name} {person.number}
          </div>
        ))}
    </div>
  );
};

export default Persons;
