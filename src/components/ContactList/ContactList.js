import React from "react";
import PropTypes from "prop-types";

import { ContactListWrapper } from "./ContactListStyled";

const ContactList = ({ contacts, onDelete }) => {
  const handleDelete = (e) => {
    onDelete(e.target.name);
  };
  return (
    <ContactListWrapper>
      <ul className="contactList">
        {contacts.map(({ id, name, number }) => {
          return (
            <li key={id} className="contactListItem">
              <p>
                {name}: {number}
              </p>
              <button
                type="button"
                name={name}
                onClick={handleDelete}
                className="contactListDeleteButton"
              >
                Delete
              </button>
            </li>
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
