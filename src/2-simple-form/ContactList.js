import React, { Component } from 'react';
import ContactItem from './ContactItem'

class ContactList extends Component {
  render() {
    const contacts = this.props.contacts;
    const contactItemElements = contacts
      .filter(function(contact) {
        return contact.email;
      })
      .map((contact) => (
        <ContactItem key={contact.key.toString()} value={contact} />
      ));

    return (
      <ul className="ContactView-list">{contactItemElements}</ul>
    );
  }
}

export default ContactList;