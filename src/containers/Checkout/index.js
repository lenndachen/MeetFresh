import React from "react";
import boom from "../../assets/images/boom.PNG";
import styles from "../Home/Home.module.css";
import { CartConsumer } from "../../Context/CartContext";
import PreviewItem from "../../components/PreviewItem";
import { Link } from "react-router-dom";
import Header from "../../components/Header";
class Checkout extends React.Component {
  render() {
    return (
      <CartConsumer>
        {props => {
          console.log(props);
          return (
            <div className="checkout-container">
              <div>
                <Header />
              </div>
              <ul className="food-and-more">
                {props.state.cart.map(cartItem => {
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
