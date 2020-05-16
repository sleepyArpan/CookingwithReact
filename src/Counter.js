import React, { Component } from 'react';
import { ThemeContext } from './App';

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
      <ThemeContext.Consumer>
        {(style) => (
          <div>
            <button style={style} onClick={() => this.changeCounter(-1)}>
              -
            </button>
            <span>{this.state.count}</span>
            <button style={style} onClick={() => this.changeCounter(1)}>
              +
            </button>
          </div>
        )}
      </ThemeContext.Consumer>
    );
  }
}

export default Counter;
