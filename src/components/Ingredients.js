import React from 'react';

export default function Ingredients({ name, amount }) {
  return (
    <div>
      <span>{name}</span>
      <span>{amount}</span>
    </div>
  );
}
