import React, { useEffect, useState } from 'react'

import './Cart.css'

import CartItem from '../CartItem/CartItem';

const Cart = ( { fruitData, items, total, updateCart }) => {

  const [highFruit, setHighFruit] = useState([]);
  
  const declareHighFruit = (arr) => {
    setHighFruit(arr);
  }

  const checkHighest = (name, price) => {
    if(name === highFruit[0]) {
      console.log('SAME FRUIT');
      return true;
    } else if (price > highFruit[1]) {
      console.log('PRICE IS HIGHER');
      return true;
    } else {
      console.log('HIGHER FRUIT');
      return false;
    }
  }

  return (
    <div className="Cart">
      <h1>SHOPPING CART ICON PLACEHOLDER</h1>
      { fruitData &&
        fruitData.map(fruit => {
          return <CartItem key={fruit.id} items={items} fruit={fruit} updateCart={updateCart} highFruit={highFruit} declareHighFruit={declareHighFruit} checkHighest={checkHighest}/>
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