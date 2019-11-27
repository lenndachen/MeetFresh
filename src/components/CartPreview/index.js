import React from "react";
import PreviewItem from "../PreviewItem"

class CartPreview extends React.Component {
  render() {
    return (
        <div>
          <div className="cart-preview-wrapper">
              <div className="cart-preview">Cart Preview</div>
              {this.props.cart.map((cartItem) => {
                return <PreviewItem 
                  previewItem={cartItem}
              />
              })}
          <div className="button-wrapper">
            <button className="checkout-button">Checkout</button>
          </div>
        </div>
        <div>
        </div>
        </div>
      )
  }
}

export default CartPreview;
