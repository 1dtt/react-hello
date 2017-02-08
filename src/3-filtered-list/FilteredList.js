import React, { Component } from 'react';
import List from './List';
import './FilteredList.css';

class FilteredList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      initialItems: this.props.items,
      items: this.props.items,
    };


    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const searchKeyword = event.target.value;
    const initialItems = this.state.initialItems;
    const filteredItems = initialItems.filter(function(item) {
      return item.name.toLowerCase().search(searchKeyword) !== -1;
    });
    this.setState({
      items: filteredItems,
    });
  }

  render() {
    return (
      <div className="filter-list">
        <input
          placeholder="Search"
          onChange={this.handleChange}
          value={this.state.searchKeyword} />
        <List items={this.state.items} />
      </div>
    );
  }
}

export default FilteredList;

// const items = [
//   {key: 0, name: 'Apples'},
//   {key: 1, name: 'Broccoli'},
//   {key: 2, name: 'Chicken'},
//   {key: 3, name: 'Duck'},
//   {key: 4, name: 'Eggs'},
//   {key: 5, name: 'Fish'},
//   {key: 6, name: 'Granola'},
//   {key: 7, name: 'Hash Browns'},
// ];

// ReactDOM.render(
//   <FilteredList items={items} />,
//   document.getElementById('root')
// );
