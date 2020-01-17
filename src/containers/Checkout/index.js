import React from "react";
import { CartConsumer } from "../../Context/CartContext";
import PreviewItem from "../../components/PreviewItem";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import styles from "./Checkout.module.scss";
import CheckoutModal from "../../components/CheckoutModal/index";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Checkout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      place: " ",
      show:false
    };
  }
   
    showModal = e => {
      console.log("hiiiiii");
      this.setState({
        show: !this.state.show
      });
    };

    addingSum = (props) => {
      var add = Number(props.state.cartTotal);
      var sum = Number(props.state.cartTotal * 0.075);
      var place = (add + sum).toFixed(2);
      return place;
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
                <div className={styles["ul-links2"]}>
                  <div className={styles["h4-cart"]}>
                    <h4>Your Cart Items</h4>
                  </div>
                  <ul className={styles["food-and-more"]}>
                    {props.state.cart.map(cartItem => {
                      return <PreviewItem previewItem={cartItem} />;
                    })}
                  </ul>
                  <div className={styles["form-payment"]}>
                    <div>
                      <div>Total</div>
                      <div>Tax</div>
                      <hr className={styles["line"]}></hr>
                      <div>Order Total</div>
                    </div>
                    <div className={styles["maths"]}>
                      <div>{Number(props.state.cartTotal.toFixed(2))}</div>
                      <div>
                        {Number((props.state.cartTotal * 0.075).toFixed(2))}
                      </div>
                      <hr className={styles["line2"]}></hr>
                      <div>{this.addingSum(props)}</div>
                    </div>
                  </div>
                </div>
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
                {this.state.show && <CheckoutModal onClose={this.showModal} />}
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
