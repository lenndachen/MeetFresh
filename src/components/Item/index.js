import React from "react";
import styles from "./Item.module.scss";

const Item = ({ item, addition }) => (
  <div className={styles["wrapper-for-food-item"]}>
    <div className={styles['for-food-items']}>
      <h1>{item.name}</h1>
      <h1>{item.price}</h1>
      <p>
        <img
          className={styles["picture-wrapper"]}
          src={item.link}
          alt="hello"
        ></img>
      </p>
      <div className={styles["wrapping-button-wrapper"]}>
        <button
          className={styles["button-wrapper"]}
          onClick={() => addition(item)}
        >
          Add to Cart
        </button>
      </div>
    </div>
  </div>
);

export default Item;
