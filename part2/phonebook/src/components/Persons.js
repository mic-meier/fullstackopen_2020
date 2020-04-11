import React from "react";

const Persons = props => {
  return (
    <div>
      {props.persons
        .filter(person =>
          person.name.toUpperCase().includes(props.searchName.toUpperCase())
        )
        .map(person => (
          <div key={person.id}>
            {person.name} {person.number}
            <button
              onClick={() => props.handleDeletePerson(person.id, person.name)}
            >
              Delete
            </button>
          </div>
        ))}
    </div>
  );
};

export default Persons;
