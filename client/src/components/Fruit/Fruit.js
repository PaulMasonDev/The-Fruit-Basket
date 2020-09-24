import React from 'react'

import './Fruit.css'

import Counter from '../Counter/Counter';

const Fruit = ( { fruit }) => {
  return (
    <div className="Fruit">
      <h1>I'm the Fruit Component</h1>
      <img src={fruit.url} alt={fruit.title}/>
      <Counter />
      <p>{fruit.title}</p>
      <p>{fruit.price}</p>
      <p>{fruit.description}</p>
    </div>
  );
}

export default Fruit;