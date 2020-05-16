import React, { useState, useContext } from 'react';
import { ThemeContext } from './App';

function CounterHooks({ initialCount }) {
  console.log('Render React Hooks');
  const [count, setCount] = useState(initialCount);
  const style = useContext(ThemeContext);

  return (
    <div>
      <button
        style={style}
        onClick={() => setCount((prevCount) => prevCount - 1)}
      >
        -
      </button>
      <span>{count}</span>
      <button
        style={style}
        onClick={() => setCount((prevCount) => prevCount + 1)}
      >
        +
      </button>
    </div>
  );
}

export default CounterHooks;
