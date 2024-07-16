import React from "react";
import { FaCartArrowDown } from "react-icons/fa";
import { useContext } from "react";
import { CartContext } from "./CartContext/CartContext";
function Header() {
    const CartValue = useContext(CartContext);
  return (
    <>
      <div className="flex bg-black justify-around items-center relative h-10 p-10">
        <h1 className="text-white text-4xl">Cart</h1>
        <FaCartArrowDown className="text-red-500 text-4xl"/>
        <span className="absolute right-96 text-white text-2xl">{CartValue.total}</span>
      </div>
    </>
  );
}

export default Header;
