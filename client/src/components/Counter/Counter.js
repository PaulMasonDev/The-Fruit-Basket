import React, { useEffect, useState } from 'react'

import './Counter.css'

const Counter = ( { fruit, updateCart, qty }) => {
  const [clicked, setClicked] = useState(false);
  const [quantity, setQuantity] = useState(0);
  
  const initialize = () => {
    setClicked(true);
    setQuantity(quantity + 1);
  }

  useEffect(() => {
    updateCart(fruit, quantity);
  }, [quantity])

  const increase = () => {
    setQuantity(quantity + 1);
    updateCart(fruit, quantity);
  }

  const decrease = () => {
    setQuantity(quantity - 1);
    updateCart(fruit, quantity);
  }

  return (
    <div className="Counter">
      {
        !clicked ?  
        <div className="Counter__add" onClick={initialize}>
          <button>+</button>
        </div>
        :
        <div className="Counter__counter-container">
          <div className="Counter__amount">
            <p>{qty}</p>
          </div>
          <div className="Counter__buttons">
            <button onClick={increase}>+</button>
            <button onClick={decrease}>-</button>
          </div>
        </div>
        
      }
      
    </div>
  );
}

export default Counter;