import React from 'react';
import ReactDOM from 'react-dom';
// import Counter from './1-simple-counter/Counter';
import App from './2-simple-form/App';

const contacts = [
  {key: 0, name: "James K Nelson", email: "james@jamesknelson.com", description: "Front-end Unicorn"},
  {key: 1, name: "Jim", email: "jim@example.com"},
];

function onContactSubmit(updatedContacts) {
  console.log(updatedContacts);
}

ReactDOM.render(
  <App contacts={contacts} onContactSubmit={onContactSubmit} />,
  // <Counter />,
  document.getElementById('root')
);
