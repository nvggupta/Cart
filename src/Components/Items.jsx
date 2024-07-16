import React, { useState, useContext } from "react";
import { IoIosArrowUp } from "react-icons/io";
import { MdKeyboardArrowDown } from "react-icons/md";
import { CartContext } from "./CartContext/CartContext";

function Items({ image, name, price, id }) {
  const [quantity, setQuantity] = useState(0);
  const { total, setTotal, price: totalPrice, setPrice, items, setitems } = useContext(CartContext);

  function increaseQuantity() {
    setQuantity((prevQuantity) => {
      const newQuantity = prevQuantity + 1;
      setTotal(total + 1);
      setPrice(totalPrice + Number(price));
      return newQuantity;
    });
  }

  function decreaseQuantity() {
    setQuantity((prevQuantity) => {
      if (prevQuantity > 0) {
        const newQuantity = prevQuantity - 1;
        setTotal(total - 1);
        setPrice(totalPrice - Number(price));
        return newQuantity;
      }
      return prevQuantity;
    });
  }

  const handleRemoveItem = () => {
    console.log('====================================');
    console.log("clicked" , id);
    console.log('====================================');
    const updatedItems = items.filter((_,ind) => ind !== id);
    console.log('====================================');
    console.log("newArray" , updatedItems);
    console.log('====================================');
    setitems(updatedItems);
    setTotal(total - quantity);
    setPrice(totalPrice - quantity * Number(price));
    setQuantity(0);
  };

  return (
    <div className="flex justify-around">
      <div className="flex gap-10 justify-center items-center">
        <img src={image} alt={name} />
        <div>
          <p>{name}</p>
          <p>{price}</p>
          <button onClick={handleRemoveItem}>remove</button>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center">
        <IoIosArrowUp onClick={increaseQuantity} />
        <p>{quantity}</p>
        <MdKeyboardArrowDown onClick={decreaseQuantity} />
      </div>
    </div>
  );
}

export default Items;
