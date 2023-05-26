import React from "react";
import Item from "./Item";
import { useState } from "react";

function ShoppingList({ items}) {
  // console.log(items)
   const [selectedCategory, setSelectedCategory]= useState("All")

   const foodToDisplay = items.filter((item) => {

   if (selectedCategory === "All"){
    return true
  } else {
    return item.category === selectedCategory;
  }


   })
  // console.log(foodToDisplay)
 


   function handleSelectedCategory(e){
    setSelectedCategory(e.target.value)
   
   }

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange = {handleSelectedCategory}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {foodToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
