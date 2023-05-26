import React from "react";
import { useState } from "react";

function Item({ name, category }) {
  // console.log(name)
  // console.log(category)
  const [cart , addToCart]= useState("")


  function handleClick(){
    addToCart(!cart)
  // if (cart == true){
  //   addToCart (false) 
  // } else addToCart (true) 
   
  }
  const appClass = cart ? "in-cart " : ""

  return (
    <li className={appClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick = {handleClick} className="add">{cart ? "Remove from Cart" : "Add to Cart"}</button>
    </li>
  );
}

export default Item;
