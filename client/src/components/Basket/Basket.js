import React from 'react'

import './Basket.css'

import Fruit from '../Fruit/Fruit';

const Basket = ( { fruitData, items, updateCart }) => {
  return (
    <div>
      <div className="Basket">
        { fruitData &&
          fruitData.map(fruit => {
            return <Fruit key={fruit.id} fruit={fruit} items={items} updateCart={updateCart} />
          })
        }
      </div>
    </div>
    
  );
}

export default Basket;