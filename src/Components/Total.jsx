import { useContext } from "react";
import React  from "react";
import { CartContext } from "./CartContext/CartContext";
function Total() {
    const CartValue = useContext(CartContext);
    const handleClearCart = () => {
      CartValue.setitems([]);  // Clear the cart
      CartValue.setTotal(0);
      CartValue.setPrice(0);
  };
   
  return (
    <>
      <div className="flex justify-around items-center mt-10">
        <p className="text-4xl">Total</p>
        <p className="text-4xl">{CartValue.price}</p>
      </div>
      <button className="w-fit text-white text-center mt-10 p-5 bg-slate-700 ms-96" onClick={handleClearCart}>
        Clear Cart
      </button>
    </>
  );
}

export default Total;
