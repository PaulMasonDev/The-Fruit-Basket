import React, { useState, useEffect } from 'react'

import './CartItem.css'
import Counter from '../Counter/Counter';

const CartItem = ( { fruit, items, updateCart, declareHighFruit, highFruit, checkHighest }) => {
  const [discount, setDiscount] = useState(1);
  
  const checkFruitPrice = (name, price) => {
    // If there is no other fruit on discount
    if(highFruit.length === 0){
      // DISCOUNT
      setDiscount(0.8);
      // PUSH THIS FRUIT NAME/PRICE TO ARRAY AND PASS UP TO SETSTATE
      const newArr = [...highFruit]
      newArr.push(name, price);
      declareHighFruit(newArr);
    } else { // Else there is other fruit
      // if other fruit unit price is lower than current fruit unit price
      const highest = checkHighest(name, price)
      if(highest) {
        // DISCOUNT
        setDiscount(0.8);
        // CLEAR AND PUSH THIS FRUIT TO OBJECT/ARRAY
        const newArr = [];
        newArr.push(name, price);
        declareHighFruit(newArr);
      } else {
        // NO DISCOUNT
        setDiscount(1);
      }      
    }
  }
  useEffect(()=> {
    if(fruit.quantity > 1) {
      checkFruitPrice(fruit.title, fruit.price);
    }
    if(fruit.quantity < 3) {
      setDiscount(1);
      if(fruit.title === highFruit[0]){
        declareHighFruit([]);
      }
    }
  }, [fruit.quantity]);

  useEffect(()=> {
    if(fruit.title !== highFruit[0]){
      setDiscount(1);
    }
  }, [items])

  return (
    <div className="CartItem">
      <img className="CartItem__img" src={fruit.url} />
      <div className="CartItem__counter-container">
        <Counter fruit={fruit.title} type="cart-item" items={items} qty={fruit.quantity} updateCart={updateCart} />
        <div>
          <p>{fruit.title}</p>
          <p className={discount === 0.8 ? "line-through" : null}>{`$${(fruit.quantity * fruit.price).toFixed(2)}`}</p>
          {
            discount === 0.8 ? <p>{`$${(fruit.quantity * fruit.price * discount).toFixed(2)}`}</p> : null
          }
          
        </div>
      </div>
    </div>
  );
}

export default CartItem;