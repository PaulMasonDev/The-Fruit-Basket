import React, { useState } from 'react'

import './CartItem.css'
import Counter from '../Counter/Counter';

const CartItem = ( { fruit, updateCart }) => {
  
  return (
    <div className="CartItem">
      <img className="CartItem__img" src={fruit.url} />
      <div className="CartItem__counter-container">
        <Counter updateCart={updateCart} />
        <p>{fruit.title}</p>
        <p>{(fruit.qty * fruit.price).toFixed(2)}</p>
      </div>
    </div>
  );
}

export default CartItem;