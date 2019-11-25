import React from "react";
import items from "../items.json";
import logo from "../../assets/images/logo.png";
import bigpicture from "../../assets/images/big.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import "../../assets/styles/_Cart.scss";
library.add(faShoppingCart);
class Cart extends React.Component {
  getCartItems() {}

  // addition = e => {
  //   e.preventDefault();
  //   const total = this.items.price + 0;
  //   if (total !== 0) {
  //     const subtotal = total;
  //     console.log

  //     return this.subtotal;
  //   }
  // };
  render() {
    return (
      <div>
        <div className="heading-wrapper">
          <div>
            <img src={logo} alt="logo" />
          </div>
          <div className="bar-wrapper">
            <div className="website-link">
              <a href="http://www.meetfresh.us/en/contact" alt="test">
                Contact Us{" "}
              </a>
            </div>
            <div className="website-link">
              <a href="http://www.meetfresh.us/en/about" alt="test">
                About Us
              </a>
            </div>
            <div className="website-link">
              <a href="http://www.meetfresh.us/en/product/p0" alt="test">
                Order Here
              </a>
            </div>
            <div>
              <FontAwesomeIcon icon={faShoppingCart} />
            </div>
            <div>
              <i class="fas fa-shopping-cart"></i>{" "}
            </div>
          </div>
        </div>
        <div className="big-picture-wrapper">
          <img
            className="big-picture"
            src={bigpicture}
            alt="woman with bowl of food"
          />
        </div>
        <div className="json-wrapper">
          {items.map((itemdetail, index) => {
            return (
              <div>
                <h1>{itemdetail.name}</h1>
                <h1>{itemdetail.price}</h1>
                <p>
                  <a href="mailto:">{itemdetail.link}</a>
                </p>
                <button onClick={e => this.addition(e)}>Add to Cart</button>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Cart;
