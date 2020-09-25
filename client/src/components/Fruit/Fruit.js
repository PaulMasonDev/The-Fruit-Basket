import React from 'react'

import './Fruit.css'

import Counter from '../Counter/Counter';

const Fruit = ( { fruit, updateCart }) => {
  return (
    <div className="Fruit">
      <img className="Fruit__img" src={fruit.url} alt={fruit.title}/>
      <div className="Fruit__counter-container">
        <Counter fruit={fruit.title} qty={fruit.quantity} updateCart={updateCart}/>
        <div>
          <p>{fruit.title}</p>
          <p>{`$${fruit.price.toFixed(2)}`}</p>
        </div>
      </div>
      <p>{fruit.description}</p>
    </div>
  );
}

export default Fruit;