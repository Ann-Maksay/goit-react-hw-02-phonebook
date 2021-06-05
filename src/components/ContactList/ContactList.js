import React from "react";
import PropTypes from "prop-types";

import { ContactListWrapper } from "./ContactListStyled";
import ContactListItem from "../ContactListItem/ContactListItem";

const ContactList = ({ contacts, onDelete }) => {
  const handleDelete = (e) => {
    onDelete(e.target.name);
  };

  return (
    <ContactListWrapper>
      <ul className="contactList">
        {contacts.map(({ id, name, number }) => {
          return (
            <ContactListItem
              key={id}
              name={name}
              number={number}
              handleDelete={handleDelete}
            ></ContactListItem>
          );
        })}
      </ul>
    </ContactListWrapper>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)).isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ContactList;
