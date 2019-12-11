import React from "react";
import styles from "./PreviewItem.module.css";

const PreviewItem = ({ previewItem }) => (
  <div className={styles["previewItem-wrapper"]}>
    <img
      className={styles["mini-image"]}
      src={previewItem.link}
      alt="small view of photos of bought items"
    />
    <div className={styles["food-wrapper"]}>
      <div>{previewItem.name}</div>
      <div>{previewItem.price}</div>
      <div>{previewItem.quantity}</div>
    </div>
  </div>
);

export default PreviewItem;
