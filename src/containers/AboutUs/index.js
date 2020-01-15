import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import styles from "./AboutUs.module.css";
import banner_01 from "../../assets/images/banner_01.png";
import th_01 from "../../assets/images/th_01.jpg";
import th_02 from "../../assets/images/th_02.jpg";
import th_03 from "../../assets/images/th_03.jpg";
import vegan from "../../assets/images/vegan.jpg"
import gluten from "../../assets/images/glutenfree.jpg"
import { Link } from "react-router-dom";
class AboutUs extends React.Component {
  render() {
    return (
      <div>
        <div className={styles["header"]}>
          <Header />
        </div>
        <div className={styles["wraps-picture-and-words"]}>
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
          <div className={styles["container-pic"]}>
            <div className={styles["text-block2"]}>
              <h2>Fresh</h2>
            </div>
            <Link to="/orderhere"><img className={styles["pic1"]} src={th_01} alt="mound of beans" /></Link>
          </div>
          <div className={styles["container-pic"]}>
            <div className={styles["text-block2"]}>
              <h2>Natural</h2>
            </div>
            <Link to="/orderhere"><img className={styles["pic1"]} src={th_02} alt="taro balls" /></Link>
          </div>
          <div className={styles["container-pic"]}>
            <div className={styles["text-block3"]}>
              <h2>Healthy</h2>
            </div>
            <Link to="/orderhere"><img className={styles["pic1"]} src={th_03} alt="rice" /></Link>
          </div>
          <div className={styles["container-pic"]}>
            <div className={styles["text-block4"]}>
              <h2>Gluten Free</h2>
            </div>
            <Link to="/orderhere"><img className={styles["pic1"]} src={gluten} alt="rice" /></Link>
          </div>
          <div className={styles["container-pic"]}>
            <div className={styles["text-block5"]}>
              <h2>Vegan</h2>
            </div>
             <Link to="/orderhere"><img className={styles["pic1"]} src={vegan} alt="rice" /></Link>
          </div>
        </div>
        <div>
          <Footer />
        </div>
      </div>
    );
  }
}

export default AboutUs;
