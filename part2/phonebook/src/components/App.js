import React, { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([{ name: "Arto Hellas" }]);
  const [newName, setNewName] = useState("");

  const handleContactChange = event => {
    setNewName(event.target.value);
  };

  const addContact = event => {
    event.preventDefault();
    const personObject = {
      name: newName
    };

    if (persons.map(person => person.name).includes(newName)) {
      alert(`${newName}  is already added to the phonebook`);
    } else {
      setPersons(persons.concat(personObject));
    }

    setNewName("");
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addContact}>
        <div>
          Name: <input value={newName} onChange={handleContactChange} />
        </div>
        <div>
          <button type="submit">Add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
        {persons.map(person => (
          <div key={person.name}>{person.name}</div>
        ))}
      </div>
    </div>
  );
};

export default App;
