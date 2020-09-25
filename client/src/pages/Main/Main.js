import React, { useEffect, useState } from 'react'

import axios from 'axios';

import './Main.css'

import Basket from '../../components/Basket/Basket';
import Cart from '../../components/Cart/Cart';

const Main = () => {
  const [fruitData, setFruitData] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(()=> {
    axios.get('/fruits')
      .then(response => {
        console.log(response.data);
        for (let fruit of response.data) {
          fruit.quantity = 0;
        }
        setFruitData(response.data);
      })
      .catch(err => console.log(err));
  },[])
  
  const updateCart = (item, quantity) => {
    console.log(item, quantity);
    let tempTotal = 0;
    for (let i = 0; i < fruitData.length; i++) {
      if (item === fruitData[i].title) {
        let newArr = [...fruitData]
        newArr[i].quantity = quantity
        newArr[i].total = newArr[i].quantity * newArr[i].price
        setFruitData(newArr);
      }
    }
    for (let i = 0; i < fruitData.length; i++) {
      tempTotal = tempTotal + fruitData[i].total;
      console.log(tempTotal);
    }
    setTotal(tempTotal);
  }

  return (
    <div className="Main">
      <Basket fruitData={fruitData} updateCart={updateCart}/>
      <Cart fruitData={fruitData} total={total} updateCart={updateCart}/>
    </div>
  );
}

export default Main;