import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Item from "../../components/Item";
import items from "../../components/items.json";
import styles from "../Home/Home.module.css";
import { CartConsumer } from "../../Context/CartContext";

class OrderHere extends React.Component {
  addition = (dispatch, item) => {
    dispatch({ type: "ADD_CART_ITEM", payload: item });
    dispatch({ type: "ADD_COST", payload: item.price });
  };

  render() {
    return (
      <CartConsumer>
        {props => {
          console.log(props);
          return (
            <div>
              <div>
                <Header />
              </div>
              <div className={styles["items-container"]}>
                {items.map(item => {
                  return (
                    <Item
                      item={item}
                      addition={() => this.addition(props.state.dispatch, item)}
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
