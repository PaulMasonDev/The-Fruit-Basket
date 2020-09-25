import React from 'react'

import './Basket.css'

import Fruit from '../Fruit/Fruit';

const Basket = ( { fruitData, updateCart }) => {
  return (
    <div>
      <div className="Basket">
        { fruitData &&
          fruitData.map(fruit => {
            return <Fruit key={fruit.id} fruit={fruit} updateCart={updateCart} />
          })
        }
      </div>
    </div>
    
  );
}

export default Basket;