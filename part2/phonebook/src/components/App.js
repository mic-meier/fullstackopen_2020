import React, { useState, useEffect } from "react";
import ContactForm from "./ContactForm";
import Notification from "./Notification";
import Persons from "./Persons";
import SearchField from "./SearchField";
import personService from "../services/persons";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [notificationClass, setNotificationClass] = useState("notification");
  const [notificationMessage, setNotificationMessage] = useState(null);
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
      window.confirm(
        `${newName} is already in your phonebook. Update phone number?`
      );
      const id = persons.filter(person => person.name.includes(newName))[0].id;
      personService.updateNumber(id, personObject).then(returnedPerson => {
        setPersons(
          persons.map(person => (person.id !== id ? person : returnedPerson))
        );
        setNotificationClass("notification");
        setNotificationMessage(`Contact "${personObject.name}" was updated.`);
        setTimeout(() => {
          setNotificationMessage(null);
        }, 2000);
        setNewName("");
        setNewNumber("");
      });
    } else {
      personService.create(personObject).then(returnedPersons => {
        setPersons(persons.concat(returnedPersons));
        setNotificationClass("notification");
        setNotificationMessage(
          `${personObject.name} was added to your contacts.`
        );
        setTimeout(() => {
          setNotificationMessage(null);
        }, 2000);
        setNewName("");
        setNewNumber("");
      });
    }
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification
        notificationClass={notificationClass}
        notificationMessage={notificationMessage}
      />
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
