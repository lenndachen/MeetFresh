import React from "react";
import styles from "./PreviewItem.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowAltCircleDown,
  faArrowAltCircleUp
} from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
library.add(faArrowAltCircleDown);

class PreviewItem extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  // newValue: this.props.previewItem.quantity,
  // };
  // }

  // DecreaseItem = quantity => {
  //   let decreaseQuantity = quantity - 1;
  //   this.setState({
  //     newValue: decreaseQuantity
  //   });
  // };

  // IncreaseItem = quantity => {
  //   let increaseQuantity = quantity + 1;
  //   this.setState({
  //     newValue: increaseQuantity
  //   });
  // };

  render() {
    return (
      <div className={styles["previewItem-wrapper"]}>
        <div className={styles["number-wrapper"]}>{this.props.previewItem.quantity}x</div>
        <div className={styles["food-wrapper"]}>
          <div className={styles["name-wrapper"]}>
            {this.props.previewItem.name}
          </div>
          <img
            className={styles["mini-image"]}
            src={this.props.previewItem.link}
            alt="small view of photos of bought items"
          />
        </div>
        <div>
          <div className={styles["price-wrapper"]}>
            {this.props.previewItem.price}
          </div>
        </div>
        {/* <div>
          <FontAwesomeIcon
            icon={faArrowAltCircleUp}
            onClick={() => this.IncreaseItem(this.props.previewItem.quantity)}
          >
            {" "}
            Up
          </FontAwesomeIcon>
          <FontAwesomeIcon
            icon={faArrowAltCircleDown}
            onClick={() => this.DecreaseItem(this.props.previewItem.quantity)}
          >
            {" "}
            Down{" "}
          </FontAwesomeIcon>
        </div> */}
      </div>
    );
  };
}
  

export default PreviewItem;
