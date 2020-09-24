import React from 'react'

import './Basket.css'

import Fruit from '../Fruit/Fruit';

const Basket = () => {
  return (
    <div>
      <h1>I'm the BASKET Component</h1>
      <div className="Basket">
        <Fruit />
        <Fruit />
        <Fruit />
        <Fruit />
        <Fruit />
      </div>
    </div>
    
  );
}

export default Basket;