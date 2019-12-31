import React from "react";
import PreviewItem from "../PreviewItem";
import styles from "./CartPreview.module.css";
import { Link } from "react-router-dom";
import { CartConsumer } from "../../Context/CartContext";
import ButtonClick from "../ButtonClick/index";
class CartPreview extends React.Component {
  render() {
       return (
         <CartConsumer>
           {props => {
             console.log("cart preview", props.state.cart);
             return (
               <div className={styles["cart-preview-wrapper"]}>
                 <div className={styles["cart-preview"]}>Cart Preview</div>
                 {this.props.cart.map(cartItem => {
                   return (
                     (<div><PreviewItem previewItem={cartItem} /></div>)
                   );
                     
                 })}
                 <div className={styles["button-wrapper"]}>
                   
                   <Link className={styles["checkout"]} to="/checkout">
                     <button className={["checkout-button"]}>Checkout</button>
                   </Link>
                   <div className={styles["subtotal"]}>
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
