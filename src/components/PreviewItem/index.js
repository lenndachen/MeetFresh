import React from "react";
import styles from "./PreviewItem.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowAltCircleDown,
  faArrowAltCircleUp
} from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import { CartConsumer } from "../../Context/CartContext";

library.add(faArrowAltCircleDown);

class PreviewItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newValue: this.props.previewItem.quantity
    };
  }

  addition = async (dispatch, item, cart) => {
    console.log("current cart", cart);
    const inCart = cart.some(cartItem => cartItem.itemID === item.itemID);
    if (!inCart) {
      item.quantity = 1;
      dispatch({ type: "ADD_CART_ITEM", payload: item });
      dispatch({ type: "GET_TOTAL" });
    } else {
      cart.map((cartItem, i) => {
        console.log("cart item", cartItem);
        if (cartItem.itemID == item.itemID) {
          item.quantity = item.quantity + 1;
          dispatch({ type: "ADD_QUANTITY", payload: { item, i } });
          dispatch({ type: "GET_TOTAL" });
        }
      });
    }
  };

  DecreaseItem = async (dispatch, item, cart) => {
    cart.map((cartItem, i) => {
      console.log("cart item", cartItem);
      if (cartItem.itemID == item.itemID) {
         if (item.quantity <= 0) {
           item.quantity = 0;
        }
         else {
          item.quantity = item.quantity - 1;  
        }
        dispatch({ type: "DECREASE_QUANTITY", payload: { item, i } });
        dispatch({ type: "GET_TOTAL" });
      }
    });
  };

  render() {
    return (
      <CartConsumer>
        {props => {
          console.log("prev", props);
          return (
            <div className={styles["previewItem-wrapper"]}>
              <div className={styles["fontawesome-up-and-down"]}>
                <ul>
                  <li>
                    <FontAwesomeIcon
                      icon={faArrowAltCircleUp}
                      size="lg"
                      onClick={() =>
                        this.addition(
                          props.state.dispatch,
                          this.props.previewItem,
                          props.state.cart
                        )
                      }
                    >
                      {" "}
                      Up
                    </FontAwesomeIcon>
                  </li>
                  <li>
                    <FontAwesomeIcon
                      icon={faArrowAltCircleDown}
                      size="lg"
                      onClick={() =>
                        this.DecreaseItem(
                          props.state.dispatch,
                          this.props.previewItem,
                          props.state.cart
                        )
                      }
                    >
                      {" "}
                      Down{" "}
                    </FontAwesomeIcon>
                  </li>
                </ul>
              </div>
              <div className={styles["number-wrapper"]}>
                {this.props.previewItem.quantity}x
              </div>
              <div className={styles["food-wrapper"]}>
                <div className={styles["name-wrapper"]}>
                  {this.props.previewItem.name}
                </div>
                <img
                  className={styles["mini-image"]}
                  src={this.props.previewItem.link}
                  alt="small view of photos of bought items"
                />
              </div>
              <div>
                <div className={styles["price-wrapper"]}>
                  {this.props.previewItem.price}
                </div>
              </div>
            </div>
          );
        }}
      </CartConsumer>
    );
  }
}

export default PreviewItem;
