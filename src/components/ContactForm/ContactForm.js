import React, { Component } from "react";
import PropTypes from "prop-types";
import { v4 as uuidv4 } from "uuid";

const INITIAL_STATE = {
  name: {},
  number: {},
};

class ContactForm extends Component {
  static propTypes = {
    isUniqe: PropTypes.func.isRequired,
    onAdd: PropTypes.func.isRequired,
  };

  state = {
    name: "",
    number: "",
  };

  handleChangeForm = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { name, number } = this.state;
    const { isUniqe, onAdd } = this.props;

    if (isUniqe(name)) {
      onAdd({ id: uuidv4(), name, number });
    } else {
      alert(`${name} is alredy in contacts`);
    }

    this.resetForm();
  };

  resetForm = () => {
    this.setState(INITIAL_STATE);
  };

  render() {
    const { name, number } = this.state;
    return (
      <form>
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
          value={name}
          onChange={this.handleChangeForm}
        />
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
          value={number}
          onChange={this.handleChangeForm}
        />
        <button type="submit">Add contact</button>
      </form>
    );
  }
}

export default ContactForm;
