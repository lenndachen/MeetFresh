import React from "react";
import PreviewItem from "../PreviewItem";
import styles from './CartPreview.module.css';

class CartPreview extends React.Component {
  render() {
    return (
        <div className={styles['cart-preview-wrapper']}>
              <div className={styles['cart-preview']}>Cart Preview</div>
              {this.props.cart.map((cartItem) => {
                return <PreviewItem 
                  previewItem={cartItem}
              />
              })}
          <div className={styles['button-wrapper']}>
            <button className="checkout-button">Checkout</button>
          </div>
        </div>

      )
  }
}

export default CartPreview;
