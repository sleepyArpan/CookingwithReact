import React from 'react';
import Counter from './Counter';
import CounterHooks from './CounterHooks';

function App() {
  console.log('Render App');
  return (
    <>
      Counter using Class based component
      <Counter initialCount={0} />
      Counter using Functional component
      <CounterHooks initialCount={0} />
    </>
  );
}

export default App;
