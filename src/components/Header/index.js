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
    if (this.state.previewOpen === false) {
      this.setState({
        previewOpen: true
      });
    }
    else {
      this.setState({
        previewOpen: false
      });
    };
  }
  render() {
    return (
      <CartConsumer>
        {props => {
          console.log("   ", props);
          return (
            <div className={styles["heading-wrapper"]}>
              <div className={styles["logo"]}>
                <Link to="/">
                  <img className={styles["boom-logo"]} src={boom} alt="logo" />
                </Link>
              </div>
              <div className={styles["bar-wrapper"]}>
                  <div className={styles["website-link"]}>
                    <Link to="/contactus">Contact Us</Link>
                  </div>
                  <div className={styles["website-link"]}>
                    <Link to="/aboutus">About Us</Link>
                  </div>
                  <div className={styles["website-link"]}>
                    <Link to="/orderhere">Order Here</Link>
                  </div>
                  <div className={styles["website-link"]}>
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
                      <div className={styles["cart-icon"]}>{props.state.cartItems}</div>
                    </button>
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
