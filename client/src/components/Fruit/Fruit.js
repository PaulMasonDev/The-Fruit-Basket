import React from 'react'

import './Fruit.css'

import Counter from '../Counter/Counter';

const Fruit = () => {
  return (
    <div className="Fruit">
      <h1>I'm the Fruit Component</h1>
      <Counter />
    </div>
  );
}

export default Fruit;