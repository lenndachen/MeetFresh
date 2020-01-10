import React from "react";
import styles from "./Home.module.css";
import { CartConsumer } from "../../Context/CartContext.js";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import employee from "../../assets/images/employee.jpg";
import collage from "../../assets/images/collage.jpg";
import work from "../../assets/images/workwithus.png";
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
            <div className={styles["whole-shabang"]}>
              <div className={styles["clear-picture"]}>
                <Header className={styles["clear-picture"]} clear={true} />
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
              <div className={styles["column-wrapper-home"]}>
                <div className={styles["employee-wrapping"]}>
                  <h3>For Employees</h3>
                  <div>
                    <img
                      className={styles["employees-img"]}
                      src={employee}
                      alt="employees"
                    ></img>
                    <ul className={styles["for-employees"]}>
                      <li>Resume</li>
                      <li>Wage</li>
                      <li>Papers</li>
                      <li>Checks</li>
                    </ul>
                    <button>Input</button>
                  </div>
                </div>
                <div className={styles["employee-wrapping"]}>
                  <h3>Work with Us</h3>
                  <div>
                    <img src={work} alt="employees"></img>
                    <ul className={styles["for-employees"]}>
                      <li>Q and A</li>
                      <li>Reviews</li>
                      <li>About Us</li>
                      <li>Franchisees</li>
                    </ul>
                    <button>Input</button>
                  </div>
                </div>
                <div className={styles["employee-wrapping"]}>
                  <h3>Creations</h3>
                  <div>
                    <img
                      className={styles["food-img"]}
                      src={collage}
                      alt="employees"
                    ></img>
                    <ul className={styles["for-employees"]}>
                      <li>Food</li>
                      <li>Drinks</li>
                      <li>Studies</li>
                      <li>How we do it</li>
                    </ul>
                    <button className={styles["input-3"]}>Input</button>
                  </div>
                </div>
              </div>
              <div className={styles["footer"]}>
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
