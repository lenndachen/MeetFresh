import React from "react";
import boom from "../../assets/images/boom.PNG";
import bigpicture from "../../assets/images/big.jpg";
import Item from "../../components/Item";
import CartPreview from "../../components/CartPreview";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import items from "../../components/items.json";
import styles from "./Home.module.css";
import { CartConsumer } from "../../Context/CartContext.js";

library.add(faShoppingCart);
class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      previewOpen: false
    };
  }

  addition = (dispatch, item) => {
    dispatch({ type: "ADD_CART_ITEM", payload: item });
    dispatch({ type: "ADD_COST", payload: item.price });
  };

  displayCartItems = () => {
    this.setState({
      previewOpen: true
    });
  };

  render() {
    console.log("previewOpen", this.state.previewOpen)
    return (
      <CartConsumer>
        {props => {
          console.log(props);
          return (
            <div>
              <div className={styles["heading-wrapper"]}>
                <div className={styles["logo"]}>
                  <img className={styles["boom-logo"]} src={boom} alt="logo" />
                </div>
                <div className={styles["bar-wrapper"]}>
                  <div className={styles["bar-wrapper-child-div"]}>
                    <div className={styles["website-link"]}>
                      <a href="http://www.meetfresh.us/en/contact" alt="test">
                        Contact Us{" "}
                      </a>
                    </div>
                    <div className={styles["website-link"]}>
                      <a href="http://www.meetfresh.us/en/about" alt="test">
                        About Us
                      </a>
                    </div>
                    <div className={styles["website-link"]}>
                      <a
                        href="http://www.meetfresh.us/en/product/p0"
                        alt="test"
                      >
                        Order Here
                      </a>
                    </div>
                    <div>
                      {" "}
                      {this.state.previewOpen && (
                        <CartPreview
                          cart={props.state.cart}
                          totalCost={props.state.cartTotal}
                        />
                      )}
                      <button onClick={this.displayCartItems}>
                        <span className={styles["clickableAwesomeFont"]}>
                          <FontAwesomeIcon icon={faShoppingCart} />
                        </span>
                        {props.state.cart.length}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="big-picture-wrapper">
                <img
                  className={styles["big-picture"]}
                  src={bigpicture}
                  alt="woman with bowl of food"
                />
              </div>
              <div className={styles["items-container"]}>
                {items.map(item => {
                  return <Item item={item} addition={() => this.addition(props.state.dispatch, item)} />;
                })}
              </div>
            </div>
          );
        }}
      </CartConsumer>
    );
  }
}

export default Home;
