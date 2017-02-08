import React, { Component } from 'react';

class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: {name: '', email: '', description: ''},
      errors: {},
    };
    this.onNameChange = this.onNameChange.bind(this);
    this.onEmailChange = this.onEmailChange.bind(this);
    this.onDescriptionChange = this.onDescriptionChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onNameChange(event) {
    const name = event.target.value;
    this.setState({value: Object.assign({}, this.state.value, {name: name})}, function() {
      this.props.onChange(this.state.value);
    });
  }

  onEmailChange(event) {
    const email = event.target.value;
    this.setState({value: Object.assign({}, this.state.value, {email: email})}, function() {
      this.props.onChange(this.state.value);
    });
  }

  onDescriptionChange(event) {
    const desc = event.target.value;
    this.setState({value: Object.assign({}, this.state.value, {description: desc})}, function() {
      this.props.onChange(this.state.value);
    });
  }

  onSubmit(event) {
    event.preventDefault();
    let errors = {};

    if(!this.state.value.name) {
      errors = Object.assign({}, errors, {name: ['please input name!']});
    }

    if(!/.+@.+\..+/.test(this.state.value.email)) {
      errors = Object.assign({}, errors, {email: ['please input email!']});
    }

    this.setState({ errors: errors }, function() {
      if(Object.keys(errors).length === 0) {
        this.props.onSubmit(this.state.value);
      }
    });
  }

  render() {
    return (
      <form onSubmit={this.onSubmit} className="ContactForm">
        <input
          type="text"
          value={this.state.value.name}
          placeholder="input new name (required)"
          onChange={this.onNameChange}
          className={this.state.errors.name && 'ContactForm-error'} />
        <input
          type="text"
          value={this.state.value.email}
          placeholder="input new email (required)"
          onChange={this.onEmailChange}
          className={this.state.errors.email && 'ContactForm-error'} />
        <textarea
          value={this.state.value.description}
          placeholder="input new description"
          onChange={this.onDescriptionChange} />
        <button type="submit">Save</button>
      </form>
    );
  }
}

export default ContactForm;