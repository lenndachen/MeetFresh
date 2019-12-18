import React from "react";
import styles from "./PreviewItem.module.css";

const PreviewItem = ({ previewItem }) => (
  <div className={styles["previewItem-wrapper"]}>
    <div className={styles["number-wrapper"]}>{previewItem.quantity}x</div>
    <div className={styles["food-wrapper"]}>
      <div className={styles["name-wrapper"]}>{previewItem.name}</div>
      <img
        className={styles["mini-image"]}
        src={previewItem.link}
        alt="small view of photos of bought items"
      />
    </div>
    <div>
      <div className={styles["price-wrapper"]}>{previewItem.price}</div>
    </div>
  </div>
);

export default PreviewItem;
