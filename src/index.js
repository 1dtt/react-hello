import React from 'react';
import ReactDOM from 'react-dom';
// import Counter from './1-simple-counter/Counter';
// import App from './2-simple-form/App';
import FilteredList from './3-filtered-list/FilteredList';

const items = [
  {key: 0, name: 'Apples'},
  {key: 1, name: 'Broccoli'},
  {key: 2, name: 'Chicken'},
  {key: 3, name: 'Duck'},
  {key: 4, name: 'Eggs'},
  {key: 5, name: 'Fish'},
  {key: 6, name: 'Granola'},
  {key: 7, name: 'Hash Browns'},
];

ReactDOM.render(
  // <Counter />,
  // <App contacts={contacts} onContactSubmit={onContactSubmit} />,
  <FilteredList items={items} />,
  document.getElementById('root')
);
