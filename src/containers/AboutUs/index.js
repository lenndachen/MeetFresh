import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import styles from "./AboutUs.module.css";
import banner_01 from "../../assets/images/banner_01.png";
import th_01 from "../../assets/images/th_01.jpg";
import th_02 from "../../assets/images/th_02.jpg";
import th_03 from "../../assets/images/th_03.jpg";

class AboutUs extends React.Component {
  render() {
    return (
      <div>
        <div>
          <Header />
        </div>
        <div className={styles["wraps-picture-and-words"]}>
          <div className={styles["About-Us-picture-wrapper"]}>
            <img
              className={styles["About-Us-Picture"]}
              src={banner_01}
              alt="2 people making food"
            />
          </div>
          <div>
            <h4>AUTHENTIC TAIWANESE EXQUISITE DESSERTS</h4>
            Sister and Brother Fu grew up in a family which has been farming for
            generations in the Feng Yuan District of Taichung, Taiwan. Using
            selected ingredients and traditional processes, they made soft taro
            balls and delicate herbal jelly desserts. They adhered strongly to
            the belief to serve customers the best tasting desserts and believed
            sincerity to be the key to customer's satisfaction.
          </div>
        </div>
        <div className={styles["div-wrapping-all-3-pics"]}>
          <ul className={styles["div-wrapping-all-3-pics"]}>
            <li>
              <h2>Fresh</h2>
              <img
                className={styles["pic1"]}
                src={th_01}
                alt="mound of beans"
              />
            </li>
            <li>
              <h2>Natural</h2>
              <img
                className={styles["pic1"]}
                src={th_02}
                alt="taro balls"
              />
            </li>
            <li>
              <h2>Healthy</h2>
              <img
                className={styles["pic1"]}
                src={th_03}
                alt="rice"
              />
            </li>
          </ul>
        </div>
        <div>
          <Footer />
        </div>
      </div>
    );
  }
}

export default AboutUs;
