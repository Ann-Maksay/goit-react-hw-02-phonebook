import React, { Component } from "react";
import PropTypes from "prop-types";

import ContactList from "./ContactList/ContactList";
import ContactForm from "./ContactForm/ContactForm";
import Filter from "./Filter/Filter";

import "./App.css";

class App extends Component {
  state = { contacts: [], filter: "" };

  isUniqe = (name) => {};

  onAdd = (newContact) => {
    this.setState((prevState) => ({
      contacts: [...prevState.contacts, newContact],
    }));
  };

  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm isUniqe={this.isUniqe} onAdd={this.onAdd} />

        <h2>Contacts</h2>
        <Filter />
        <ContactList />
      </div>
    );
  }
}

export default App;
