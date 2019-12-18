import React from "react";
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
    console.log("previewOpen", this.state.previewOpen);
    return (
      <CartConsumer>
        {props => {
          console.log(props);
          return (
            <div>
              <div>
                <Header />
              </div>
              <div>
                <div className={styles["picture-with-bowl"]}>
                  Fresh Meet has been open since 1975. With over 40 years of
                  experience. We have served millions of people with <br />
                  our specially designed Taiwanese treats made be ourselves. The
                  quality of our food is only the most natural and best quality
                  of
                  <br /> foods. Our desserts are made with love in our factory
                  in Fuzhou, China and then shipped in trucks with high <br />
                  standard refrigeration. Our food is then prepared by chefs
                  with kitchen grade equipment.
                  <br /> With so much dedication in our food process we proudly
                  provide our product with
                  <br /> great satisfaction.
                </div>
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
