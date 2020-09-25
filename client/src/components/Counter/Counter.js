import React, { useEffect, useState } from 'react'

import './Counter.css'

const Counter = ( { fruit, items, type, updateCart, qty }) => {
  const [clicked, setClicked] = useState(false);
  const [quantity, setQuantity] = useState(0);
  const [style, setStyle] = useState('');
  const initialize = () => {
    setClicked(true);
    setQuantity(quantity + 1);
  }

  useEffect(() => {
    updateCart(fruit, quantity);
  }, [quantity])

  // useEffect(()=> {
  //   if(type === "cart-item") {
  //     setStyle("invisible");
  //   }
  // }, [])

  const increase = () => {
    if(items < 10) {
      setQuantity(quantity + 1);
      updateCart(fruit, quantity);
    }
    
  }

  const decrease = () => {
    if(quantity >= 1) {
      setQuantity(quantity - 1);
      updateCart(fruit, quantity);
    }
  }

  return (
    <div className="Counter">
      {
        !clicked ?  
        <div className="Counter__add" onClick={initialize}>
          <button className={style}>+</button>
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