import React from "react";
import bigpicture from "../../assets/images/big.jpg";
import styles from "./Home.module.css";
import { CartConsumer } from "../../Context/CartContext.js";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
class Home extends React.Component {

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
    console.log("previewOpen", this.state.previewOpen)
    return (
      <CartConsumer>
        {props => {
          console.log(props);
          return (
            <div>
              <div>
                <Header />
              </div>
              <div className="big-picture-wrapper">
                <img
                  className={styles["big-picture"]}
                  src={bigpicture}
                  alt="woman with bowl of food"
                />
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

export default Home;
