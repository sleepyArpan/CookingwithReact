import React, { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: this.props.initialCount,
    };
  }

  changeCounter(amount) {
    this.setState((prevState) => {
      return {
        count: prevState.count + amount,
      };
    });
  }

  render() {
    console.log('Render class based component');
    return (
      <div>
        <button onClick={() => this.changeCounter(-1)}>-</button>
        <span>{this.state.count}</span>
        <button onClick={() => this.changeCounter(1)}>+</button>
      </div>
    );
  }
}

export default Counter;
