import React from "react";
import PreviewItem from "../PreviewItem";
import styles from "./CartPreview.module.css";
import { Link } from "react-router-dom";
class CartPreview extends React.Component {
  render() {
    return (
      <div className={styles["cart-preview-wrapper"]}>
        <div className={styles["cart-preview"]}>Cart Preview</div>
        {this.props.cart.map(cartItem => {
          return <PreviewItem previewItem={cartItem} />;
        })}
        <div className={styles["button-wrapper"]}>
          <Link to="/checkout">
            <button className="checkout-button">Checkout</button>
          </Link>
        </div>
      </div>
    );
  }
}

export default CartPreview;
