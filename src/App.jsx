import React from 'react'
import Header from './Components/Header'
import Heading from './Components/Heading'
import CartItems from './Components/CartItems'
import Total from './Components/Total'
import { useContext } from "react";
import { CartContext } from './Components/CartContext/CartContext'
import Empty from './Components/Empty'
import img from './Assets/images.jpg';
function App() {
  const cartValue = useContext(CartContext);
  console.log(cartValue);
  return (
    <>
      <Header />
      <Heading />
      
    {(cartValue.items.length>0)?<CartItems />:<Empty /> }
      <hr></hr>
      <Total />
    </>
  )
}

export default App