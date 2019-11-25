import React from "react";

const Item = ({ item, addition }) => (
  <div>
    <h1>{item.name}</h1>
    <h1>{item.price}</h1>
    <p>
      <a href="mailto:">{item.link}</a>
    </p>
    <button onClick={() => addition(item)}>Add to Cart</button>
  </div>
);

export default Item;
