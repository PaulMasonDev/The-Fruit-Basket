import React, { useEffect, useState } from 'react'

import axios from 'axios';

import './Main.css'

import Basket from '../../components/Basket/Basket';
import Cart from '../../components/Cart/Cart';

const Main = () => {
  const [fruitData, setFruitData] = useState(null);

  useEffect(()=> {
    axios.get('/fruits')
      .then(response => {
        console.log(response.data);
        setFruitData(response.data);
      })
      .catch(err => console.log(err));
  },[])
  
  const updateCart = (item, quantity) => {
    console.log(item, quantity);
    
  }

  return (
    <div className="Main">
      <Basket fruitData={fruitData} updateCart={updateCart}/>
      <Cart fruitData={fruitData} updateCart={updateCart}/>
    </div>
  );
}

export default Main;