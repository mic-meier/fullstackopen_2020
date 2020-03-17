import React from "react";

const ContactForm = props => {
  return (
    <form onSubmit={props.addContact}>
      <div>
        Name:{" "}
        <input value={props.newName} onChange={props.handleContactChange} />
      </div>
      <div>
        Number:{" "}
        <input value={props.newNumber} onChange={props.handleNumberChange} />
      </div>
      <div>
        <button type="submit">Add</button>
      </div>
    </form>
  );
};

export default ContactForm;
