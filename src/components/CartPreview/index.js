import React from "react";
import PreviewItem from "../PreviewItem";
import styles from "./CartPreview.module.css";
import { Link } from "react-router-dom";
import { CartConsumer } from "../../Context/CartContext";
class CartPreview extends React.Component {
  render() {
       return (
         <CartConsumer>
           {props => {
             console.log(props);
             return (
               <div className={styles["cart-preview-wrapper"]}>
                 <div className={styles["cart-preview"]}>Cart Preview</div>
                 {this.props.cart.map(cartItem => {
                   return <PreviewItem previewItem={cartItem} />;
                 })}
                 <div className={styles["button-wrapper"]}>
                   <Link to="/checkout">
                     <button className={["checkout-button"]}>Checkout</button>
                   </Link>
                   <div>SubTotal: {Number((props.state.cartTotal).toFixed(2))}</div>
                 </div>
               </div>
             );
           }}
         </CartConsumer>
       );
  }
}

export default CartPreview;
