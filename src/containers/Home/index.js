import React from "react";
import styles from "./Home.module.scss";
import { CartConsumer } from "../../Context/CartContext.js";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import employee from "../../assets/images/employee.jpg";
import collage from "../../assets/images/collage.jpg";
import work from "../../assets/images/workwithus.png";
import dessert from "../../assets/images/dessert.jpg"
import { Link } from 'react-router-dom';
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
                  <p className={styles["p-of-picture-with-bowl"]}>
                    Fresh Meet has been open since 1975. With over 40 years of
                    experience. We have served millions of people with <br />
                    our specially designed Taiwanese treats made be ourselves.
                    The quality of our food is only the most natural and best
                    quality of
                    <br /> foods. Our desserts are made with love in our factory
                    in Fuzhou, China and then shipped in trucks with high <br />
                    standard refrigeration. Our food is then prepared by chefs
                    with kitchen grade equipment.
                    <br /> With so much dedication in our food process we
                    proudly provide our product with
                    <br /> great satisfaction.
                  </p>
                </div>
                {/* <div>
                    <img className={styles["dessert-example"]} src={dessert} alt="dessert example"></img>
                  </div> */}
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
                      <Link to="/contactus">
                        <li>Resume</li>{" "}
                      </Link>
                      <Link to="/contactus">
                        <li>Wage</li>
                      </Link>
                      <Link to="/contactus">
                        <li>Papers</li>
                      </Link>
                      <Link to="/contactus">
                        <li>Checks</li>
                      </Link>
                    </ul>
                  </div>
                </div>
                <div className={styles["employee-wrapping"]}>
                  <h3>Work with Us</h3>
                  <div>
                    <img src={work} alt="employees"></img>
                    <ul className={styles["for-employees"]}>
                      <Link to="/contactus">
                        <li>Q and A</li>
                      </Link>
                      <Link to="/contactus">
                        <li>Reviews</li>
                      </Link>
                      <Link to="/contactus">
                        <li>About Us</li>
                      </Link>
                      <Link to="/contactus">
                        <li>Franchisees</li>
                      </Link>
                    </ul>
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
                      <Link to="/contactus">
                        <li>Food</li>
                      </Link>
                      <Link to="/contactus">
                        <li>Drinks</li>
                      </Link>
                      <Link to="/contactus">
                        <li>Studies</li>
                      </Link>
                      <Link to="/contactus">
                        <li>How we do it</li>
                      </Link>
                    </ul>
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
