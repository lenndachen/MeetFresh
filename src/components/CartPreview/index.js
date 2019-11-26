import React from "react";
import PreviewItem from "../PreviewItem"

class CartPreview extends React.Component {
  render() {
      return(
          <div className="cart-preview-wrapper">
              <div>Cart Preview</div>
              {this.props.cart.map((cartItem) => {
                return <PreviewItem 
                previewItem={cartItem}
              />
          })}
    </div>
      )
  }
}

export default CartPreview;
