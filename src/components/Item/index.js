import React from "react";
import { tsPropertySignature } from "@babel/types";

const Item = ({ item, addition }) => {

  return (
  <div className="wrapper-for-food-items">
    <h1>{item.name}</h1>
    <h1>{item.price}</h1>
    <p>
      <img src={item.link} alt="hello"></img>
    </p>
    <button onClick={() => addition(item)}>Add to Cart</button>
  </div>
);
}

export default Item;
