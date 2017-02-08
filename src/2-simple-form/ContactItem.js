import React, { Component } from 'react';

class ContactItem extends Component {
  render() {
    return (
      <li className="ContactItem">
        <h2 className="ContactItem-name">{this.props.value.name}</h2>
        <a className="ContactItem-email" href={"toemail:" + this.props.value.email}>{this.props.value.email}</a>
        <div className="ContactItem-description">{this.props.value.description}</div>
      </li>
    );
  }
}

export default ContactItem;