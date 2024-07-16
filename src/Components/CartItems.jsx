import React from "react";
import Items from "./Items";
import { useContext } from "react";
import { CartContext } from "./CartContext/CartContext";
import data from '../Item.json';

function CartItems() {
 const cartValue = useContext(CartContext);
  return (
    <>
      <div>
        {cartValue.items.map((elem , ind) => (
          <Items key={ind} id={ind} image={elem.image} name={elem.name} price={elem.price} />
        ))}
      </div>
    </>
  );
}

export default CartItems;
