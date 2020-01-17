import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Item from "../../components/Item";
import items from "../../components/items.json";
import styles from "../Home/Home.module.scss";
import { CartConsumer } from "../../Context/CartContext";
class OrderHere extends React.Component {
  
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
          //  console.log('duplicaate cart', i, cartItem)
          item.quantity = item.quantity + 1;
          dispatch({ type: "ADD_QUANTITY", payload: { item, i } });
          dispatch({ type: "GET_TOTAL" });
          //  dispatch({ type: "ADD_COST", payload: item.price });
          //  return
        }
      });
    }
  };

  render() {
    return (
      <CartConsumer>
        {props => {
          console.log(props);
          return (
            <div className={styles["orderhere-wholeform"]}>
              <div>
                <Header />
              </div>
              <div className={styles["items-container"]}>
                {items.map(item => {
                  return (
                    <Item
                      item={item}
                      addition={() =>
                        this.addition(
                          props.state.dispatch,
                          item,
                          props.state.cart
                        )
                      }
                    />
                  );
                })}
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

export default OrderHere;
