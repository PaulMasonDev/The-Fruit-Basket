import React from 'react'

import './Main.css'

import Basket from '../../components/Basket/Basket';
import Cart from '../../components/Cart/Cart';

const Main = () => {
  return (
    <div className="Main">
      <Basket />
      <Cart />
    </div>
  );
}

export default Main;