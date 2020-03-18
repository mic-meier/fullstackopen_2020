import React, { useState, useEffect } from "react";
import ContactForm from "./ContactForm";
import Persons from "./Persons";
import SearchField from "./SearchField";
import personService from "../services/persons";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [searchName, setSearchName] = useState("");

  useEffect(() => {
    personService.getAll().then(initialPersons => {
      setPersons(initialPersons);
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

  const handleDeleteperson = id => {
    window.confirm(`Delete contact ${id}?`);
    personService.deletePerson(id).then(() => {
      setPersons(persons.filter(person => person.id !== id));
    });
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
      personService.create(personObject).then(returnedPersons => {
        setPersons(persons.concat(returnedPersons));
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
      <Persons
        persons={persons}
        searchName={searchName}
        handleDeletePerson={handleDeleteperson}
      />
    </div>
  );
};

export default App;
