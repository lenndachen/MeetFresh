import React from "react";
import logo from "../../assets/images/logo.png";
import bigpicture from "../../assets/images/big.jpg";
import Item from "../../components/Item";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import items from "../../components/items.json";
import "../../assets/styles/_Cart.scss";

library.add(faShoppingCart);
class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cartTotal: 0,
      cart: [],
      item: []
    };
  }
  getCartItems() {}

  addition = item => {
    console.log("item1", item);
    let cart = this.state.cart;
    const totalCost = item.price + this.state.cartTotal;
    console.log("total", totalCost);
    cart.push(item);
    this.setState({
      cart: cart,
      cartTotal: totalCost
    });
  };
  render() {
    console.log("this.state.cart", this.state.cart);
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
            <div>{this.state.cart.length}</div>
            <div>
              <i class="fas fa-shopping-cart"></i>
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
        <div>
          {items.map(item => {
            return <Item
              item={item}
              addition={this.addition}
              />;
          })}
        </div>
      </div>
    );
  }
}

export default Cart;
