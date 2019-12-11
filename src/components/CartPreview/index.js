import React from "react";
import PreviewItem from "../PreviewItem";
import styles from "./CartPreview.module.css";
import { Link } from "react-router-dom";
import { CartConsumer } from "../../Context/CartContext";

class CartPreview extends React.Component {
  // getInfo() {
  // const i = 0
  //   { this.props.cart.map } {
  //     if (cart[0] === itemID[i]) {
  //       return 1, i++
  //     }
  //     if (cart[0] === itemID[i]) {
  //       return 2, i++ 
  //     }
  //   }
  // }
  render() {
       return (
         <CartConsumer>
           {props => {
             console.log("cart preview", props.state.cart);
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
                   <div>
                     SubTotal: {Number(props.state.cartTotal.toFixed(2))}
                   </div>
                 </div>
               </div>
             );
           }}
         </CartConsumer>
       );
  }
}

export default CartPreview;
