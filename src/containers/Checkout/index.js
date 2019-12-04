import React from "react";
import boom from "../../assets/images/boom.PNG";
import styles from "../Home/Home.module.css";
import { CartConsumer } from "../../Context/CartContext";
import PreviewItem from "../../components/PreviewItem";

class Checkout extends React.Component {
  render() { 
     return (
       <CartConsumer>
         {props => {
           console.log(props);
           return (
             <div className="checkout-container">
             <div>
               <div className={styles["logo"]}>
                 <img className={styles["boom-logo"]} src={boom} alt="logo" />
                 </div>
               </div>
               <ul>
                 {props.state.cart.map((cartItem) => { 
                   return <PreviewItem previewItem={cartItem} />;
                 })}
               </ul>
            </div>
           );
         }}
       </CartConsumer>
     );
     }
    }
            
export default Checkout;
