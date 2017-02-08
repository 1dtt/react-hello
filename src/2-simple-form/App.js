import React, { Component } from 'react';
import ContactList from './ContactList'
import ContactForm from './ContactForm'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: this.props.contacts,
    };
    this.onContactChange = this.onContactChange.bind(this);
    this.onContactSubmit = this.onContactSubmit.bind(this);
  }

  onContactChange(contact) {
  }

  onContactSubmit(contact) {
    let contacts = this.state.contacts;
    contacts.push(Object.assign({}, contact, {key: contacts.length}));
    this.setState({
      contacts: contacts,
    }, function() {
      this.props.onContactSubmit(this.state.contacts);
    });
  }

  render() {
    return (
      <div>
        <h1 className="ContactView-title">Contacts</h1>
        <ContactList contacts={this.state.contacts} />
        <ContactForm onChange={this.onContactChange} onSubmit={this.onContactSubmit} />
      </div>
    );
  }
}

export default App;

// const contacts = [
//   {key: 0, name: "James K Nelson", email: "james@jamesknelson.com", description: "Front-end Unicorn"},
//   {key: 1, name: "Jim", email: "jim@example.com"},
// ];

// function onContactSubmit(updatedContacts) {
//   console.log(updatedContacts);
// }

// ReactDOM.render(
//   <App contacts={contacts} onContactSubmit={onContactSubmit} />,
//   document.getElementById('root')
// );