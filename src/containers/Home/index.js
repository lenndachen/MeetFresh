import React from "react";
import logo from "../../assets/images/logo.png";
import bigpicture from "../../assets/images/big.jpg";
import Item from "../../components/Item";
import CartPreview from "../../components/CartPreview";
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
      item: [],
      previewOpen: false,
    };
  }

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

  displayCartItems = () => {
    this.setState({
      previewOpen: true,
    })
  }
  render() {
    console.log("this.state.cart", this.state.cart);
    return (
      <div>
        <div className="heading-wrapper">
          <div className="logo">
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
            <div> {this.state.previewOpen &&
              <CartPreview cart={this.state.cart}
              totalCost={this.state.cartTotal}
              />}
              <button onClick={this.displayCartItems}>
                <span className="clickableAwesomeFont">
                  <FontAwesomeIcon icon={faShoppingCart} />
                </span>
                {this.state.cart.length}
              </button></div>
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
            return <Item item={item} addition={this.addition} />;
          })}
        </div>
      </div>
    );
  }
}

export default Cart;
