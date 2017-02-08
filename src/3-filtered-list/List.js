import React, { Component } from 'react';
import Item from './Item';

class List extends Component {
  render() {
    const items = this.props.items;
    const listElements = items
      .map((item) => (
        <Item name={item.name} key={item.key} />
      ));

    return (
      <ul>
        {listElements}
      </ul>
    );
  }
}

export default List;