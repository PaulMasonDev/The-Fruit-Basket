import React, { useEffect } from 'react'

import './Cart.css'

import CartItem from '../CartItem/CartItem';

const Cart = ( { fruitData, total, updateCart }) => {
  
  return (
    <div className="Cart">
      <h1>SHOPPING CART ICON PLACEHOLDER</h1>
      { fruitData &&
        fruitData.map(fruit => {
          return <CartItem key={fruit.id} fruit={fruit} updateCart={updateCart}/>
        })
      }
      <div className="Cart__checkout">
        <button>CHECKOUT</button>
        <p>TOTAL:</p>
        <p>{`$${total.toFixed(2)}`}</p>
      </div>
    </div>
  );
}

export default Cart;