import React, {useState} from "react";

function Item({ name, category }) {

  const [addToCart, setMode] = useState(false)

  function handleClick(){
    console.log("clicked")
    setMode((addToCart) => !addToCart)
  }

  const itemClass = addToCart ? "in-cart" : " "


  return (
    <li className={itemClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleClick}>{addToCart ? "Remove From Cart" : "Add to Cart"}</button>
    </li>
  );
}

export default Item;
