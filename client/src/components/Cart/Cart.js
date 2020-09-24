import React from 'react'

import './Cart.css'

import Fruit from '../Fruit/Fruit';

const Cart = ( { fruitData, updateCart }) => {
  return (
    <div>
      <h1>I'm the Cart Component</h1>
      { fruitData &&
        fruitData.map(fruit => {
          return <Fruit key={fruit.id} fruit={fruit} updateCart={updateCart}/>
        })
      }
    </div>
  );
}

export default Cart;