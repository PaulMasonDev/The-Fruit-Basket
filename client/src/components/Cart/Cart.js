import React from 'react'

import './Cart.css'

import CartItem from '../CartItem/CartItem';

const Cart = ( { fruitData, updateCart }) => {
  return (
    <div className="Cart">
      <h1>SHOPPING CART</h1>
      { fruitData &&
        fruitData.map(fruit => {
          return <CartItem key={fruit.id} fruit={fruit} updateCart={updateCart}/>
        })
      }
    </div>
  );
}

export default Cart;