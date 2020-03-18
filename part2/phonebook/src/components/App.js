import React, { useState, useEffect } from "react";
import axios from "axios";
import ContactForm from "./ContactForm";
import Persons from "./Persons";
import SearchField from "./SearchField";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [searchName, setSearchName] = useState("");

  useEffect(() => {
    axios.get("http://localhost:3001/persons").then(res => {
      setPersons(res.data);
    });
  }, []);

  const handleSearchNameChange = event => {
    setSearchName(event.target.value);
  };

  const handleContactChange = event => {
    setNewName(event.target.value);
  };

  const handleNumberChange = event => {
    setNewNumber(event.target.value);
  };

  const addContact = event => {
    event.preventDefault();
    const personObject = {
      name: newName,
      number: newNumber
    };

    if (persons.map(person => person.name).includes(newName)) {
      alert(`${newName}  is already added to the phonebook`);
    } else {
      axios.post("http://localhost:3001/persons", personObject).then(res => {
        setPersons(persons.concat(res.data));
        setNewName("");
        setNewNumber("");
      });
    }
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <SearchField
        searchName={searchName}
        handleSearchNameChange={handleSearchNameChange}
      />
      <h2>Add new contact</h2>
      <ContactForm
        addContact={addContact}
        newName={newName}
        handleContactChange={handleContactChange}
        newNumber={newNumber}
        handleNumberChange={handleNumberChange}
      />
      <h2>Numbers</h2>
      <Persons persons={persons} searchName={searchName} />
    </div>
  );
};

export default App;
