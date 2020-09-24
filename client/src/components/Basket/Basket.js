import React from 'react'

import './Basket.css'

import Fruit from '../Fruit/Fruit';

const Basket = ( { fruitData }) => {
  return (
    <div>
      <h1>I'm the BASKET Component</h1>
      <div className="Basket">
        { fruitData &&
          fruitData.map(fruit => {
            return <Fruit fruit={fruit} />
          })
        }
      </div>
    </div>
    
  );
}

export default Basket;