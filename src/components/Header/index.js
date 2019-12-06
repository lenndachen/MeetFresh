import React from "react";
import styles from "./Header.module.css";
import { CartConsumer } from "../../Context/CartContext";
import boom from "../../assets/images/boom.PNG";
import CartPreview from "../CartPreview";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import { Link } from "react-router-dom";

library.add(faShoppingCart);
class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      previewOpen: false
    };
  }

  displayCartItems = () => {
    this.setState({
      previewOpen: true
    });
  };

  render() {
    return (
      <CartConsumer>
        {props => {
          console.log("hello", props);
          return (
            <div className={styles["heading-wrapper"]}>
              <div className={styles["logo"]}>
                <Link to="/">
                  <img className={styles["boom-logo"]} src={boom} alt="logo" />
                </Link>
              </div>
              <div className={styles["bar-wrapper"]}>
                <div className={styles["bar-wrapper-child-div"]}>
                  <div className={styles["website-link"]}>
                    <Link to="/contactus">Contact Us</Link>
                  </div>
                  <div className={styles["website-link"]}>
                    <Link to="/aboutus">About Us</Link>
                  </div>
                  <div className={styles["website-link"]}>
                    <Link to="/orderhere">Order Here</Link>
                  </div>
                  <div>
                    {" "}
                    {this.state.previewOpen && (
                      <CartPreview
                        cart={props.state.cart}
                        totalCost={props.state.cartTotal}
                      />
                    )}
                    <button
                      className={styles["cart-button"]}
                      onClick={this.displayCartItems}
                    >
                      <span className={styles["clickableAwesomeFont"]}>
                        <FontAwesomeIcon icon={faShoppingCart} />
                      </span>
                      {props.state.cart.length}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        }}
      </CartConsumer>
    );
  }
}

export default Header;
