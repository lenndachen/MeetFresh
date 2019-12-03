import React, {useState, useContext} from "react";
import logo from "../../assets/images/logo.png";
import bigpicture from "../../assets/images/big.jpg";
import Item from "../../components/Item";
import CartPreview from "../../components/CartPreview";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import items from "../../components/items.json";
import "../../assets/styles/_Cart.scss";
import { CartConsumer } from "../../Context/CartContext.js";

library.add(faShoppingCart);


class Home extends React.Component {


  addition = (dispatch, item) => {
   dispatch({type: 'ADD_CART_ITEM', payload: item})
   dispatch({type: 'ADD_COST', payload: item.price})
  };

  displayCartItems = () => {
    this.setState({
      previewOpen: true
    });
  };


  render() {
    let previewOpen = false;
    return (
      <CartConsumer>
        {props => { 
          console.log(props)
          return (<div>
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
              <div>
                {" "}
                {previewOpen && (
                  <CartPreview
                    // cart={this.state.cart}
                    // totalCost={this.state.cartTotal}
                  />
                )}
                <button onClick={this.displayCartItems}>
                  <span className="clickableAwesomeFont">
                    <FontAwesomeIcon icon={faShoppingCart} />
                  </span>
                  {/* {this.state.cart.length} */}
                </button>
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
              return <Item item={item} addition={() => this.addition(props.state.dispatch, item)} />;
            })}
          </div>
        </div>
        )
        }}
        </CartConsumer>
    );
  }
}

export default Home;
