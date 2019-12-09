import React from "react";
import { CartConsumer } from "../../Context/CartContext";
import PreviewItem from "../../components/PreviewItem";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
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
              <div>
                <Footer />
              </div>
            </div>
          );
        }}
      </CartConsumer>
    );
  }
}

export default Checkout;
