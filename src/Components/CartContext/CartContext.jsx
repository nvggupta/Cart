import React, { useEffect } from 'react'
import { createContext,useState } from 'react'
import data from './../../Item.json'

  export  const CartContext = createContext(null);
  export const CartProvider = (props)=>{

    const product = [...data];
    const [total , setTotal] = useState(0);
    const [price , setPrice] = useState(0);
    const [items , setitems] = useState(product);
    return (
        <CartContext.Provider value={{total , setTotal ,price , setPrice ,items , setitems }}>
            {props.children}
        </CartContext.Provider>
    )
  }  