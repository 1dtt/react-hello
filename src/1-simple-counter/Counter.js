import React, { Component } from 'react';
import './Counter.css';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
    };

    this.increase = this.increase.bind(this);
  }

  increase(event) {
    this.setState((prevState, props) => ({
      value: prevState.value + 1,
    }));
  }

  render() {
    return (
      <div className="counter">
        <h1>Count: {this.state.value}</h1>
        <button type="button" onClick={this.increase}>Increment</button>
      </div>
    );
  }
}

export default Counter;

// ReactDOM.render(
//   <Counter />,
//   document.getElementById('root')
// );
