import React from "react";

const PreviewItem = ({ previewItem }) => (
  <div className="previewItem-wrapper">
    <img className="mini-image" src={previewItem.link} alt="small view of photos of bought items"/>
    <div className="food-wrapper">
      <div>{previewItem.name}</div>
      <div>{previewItem.price}</div>
    </div>
  </div>
);

export default PreviewItem;
