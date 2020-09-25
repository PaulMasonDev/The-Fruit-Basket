import React, { useState } from 'react'

import './CartItem.css'
import Counter from '../Counter/Counter';

const CartItem = ( { fruit, updateCart }) => {
  
  return (
    <div className="CartItem">
      <img className="CartItem__img" src={fruit.url} />
      <div className="CartItem__counter-container">
        <Counter fruit={fruit.title} qty={fruit.quantity} updateCart={updateCart} />
        <div>
          <p>{fruit.title}</p>
          <p>{`$${(fruit.quantity * fruit.price).toFixed(2)}`}</p>
        </div>
      </div>
    </div>
  );
}

export default CartItem;