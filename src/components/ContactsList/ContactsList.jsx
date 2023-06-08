import React from "react";
import css from "./ContactsList.module.css";
import PropTypes from 'prop-types';

export const ContactsList = ({ contacts, onDelete }) => {
    return (
        <>
        <ul>{contacts.map((contact) => (
            <li className={css.list_item} key={contact.contactId}>
                <p>
                    {contact.name}: <span>{contact.number}</span>
                </p>
                <button className={css.deleteBtn} onClick={ () => onDelete(contact.contactId)}>Delete</button>
            </li>
            ))}
        </ul>
      </>
    );
  };

ContactsList.propTypes = {
    contacts: PropTypes.arrayOf(
        PropTypes.exact({
            name: PropTypes.string.isRequired,
            number: PropTypes.string.isRequired,
            contactId: PropTypes.string.isRequired,
        })
    ).isRequired
}