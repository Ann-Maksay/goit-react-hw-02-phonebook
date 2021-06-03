import React, { Component } from "react";

import ContactList from "./ContactList/ContactList";
import ContactForm from "./ContactForm/ContactForm";
import Filter from "./Filter/Filter";

class App extends Component {
  state = { contacts: [], filter: "" };

  isUniqe = (name) => {
    const { contacts } = this.state;
    const isExist = contacts.find((contact) => contact.name === name);

    return !isExist;
  };

  onAdd = (newContact) => {
    this.setState((prevState) => ({
      contacts: [...prevState.contacts, newContact],
    }));
  };

  onDelete = (name) => {
    const { contacts } = this.state;

    const newContacts = contacts.filter((elem) => elem.name !== name);
    this.setState({ contacts: newContacts });
  };

  setFilter = (value) => {
    this.setState({ filter: value });
  };

  render() {
    const contactsList = this.state.contacts.filter((elem) =>
      elem.name.toLowerCase().includes(this.state.filter.toLowerCase())
    );

    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm isUniqe={this.isUniqe} onAdd={this.onAdd} />

        <h2>Contacts</h2>
        <Filter setFilter={this.setFilter} value={this.state.filter} />
        <ContactList contacts={contactsList} onDelete={this.onDelete} />
      </div>
    );
  }
}

export default App;
