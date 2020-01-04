import React from "react";
import { CartConsumer } from "../../Context/CartContext";
import PreviewItem from "../../components/PreviewItem";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import styles from "./Checkout.module.css";
import CheckoutModal from "../../components/CheckoutModal/index";

class Checkout extends React.Component {
  state = {
    show: false
  };
  showModal = e => {
    console.log('hiiiiii')
    this.setState({
      show: !this.state.show
    });
  };

  render() {
    return (
      <CartConsumer>
        {props => {
          console.log(props);
          return (
            <div className={styles["checkout-container"]}>
              <div>
                <Header />
              </div>
              <div className={styles["ul-links"]}>
                <ul className={styles["food-and-more"]}>
                  {props.state.cart.map(cartItem => {
                    return <PreviewItem previewItem={cartItem} />;
                  })}
                </ul>
              </div>
                <div>
          
                    <button
                      className={styles["toggle-button"]}
                      id="centered-toggle-button"
                      onClick={e => {
                        this.showModal(e);
                  }}
                  
                    >
                      Payment
                    </button>
               
                  <CheckoutModal onClose={this.showModal} show={this.state.show}>
                  </CheckoutModal>
                </div>
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
