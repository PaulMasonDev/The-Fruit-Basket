import React, { useEffect, useState } from 'react'

import axios from 'axios';

import './Main.css'

import Basket from '../../components/Basket/Basket';
import Cart from '../../components/Cart/Cart';

const Main = () => {
  const [fruitData, setFruitData] = useState([]);
  const [total, setTotal] = useState(0);
  const [items, setItems] = useState(0);

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
    for (let i = 0; i < fruitData.length; i++) {
      if (item === fruitData[i].title) {
        let newArr = [...fruitData]
        newArr[i].quantity = quantity
        newArr[i].total = newArr[i].quantity * newArr[i].price
        setFruitData(newArr);
      }
    }
    // Not sure if there might be a better solution. Placing the set hooks in the for loop doesn't work.
    let tempTotal = 0;
    let tempItems = 0;
    for (let i = 0; i < fruitData.length; i++) {
      tempTotal = tempTotal + fruitData[i].total;
      tempItems = tempItems + fruitData[i].quantity;
      console.log(tempItems, tempTotal);
    }
    setTotal(tempTotal);
    setItems(tempItems);
  }

  return (
    <div className="Main">
      <Basket fruitData={fruitData} items={items} updateCart={updateCart}/>
      <Cart fruitData={fruitData} items={items} total={total} updateCart={updateCart}/>
    </div>
  );
}

export default Main;