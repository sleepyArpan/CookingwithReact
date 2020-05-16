import React from 'react';
import Ingredients from './Ingredients';

export default function IngredientList({ ingredients }) {
  const ingredientsElement = ingredients.map((ingredient) => {
    return <Ingredients key={ingredient.id} {...ingredient} />;
  });
  return <div>{ingredientsElement}</div>;
}
