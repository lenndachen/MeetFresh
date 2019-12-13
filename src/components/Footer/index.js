import React from "react";
import styles from "./Footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitterSquare,
  faFacebook,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

library.add(faTwitterSquare);
class Footer extends React.Component {
  render() {
    return (
      <div className={styles["footer"]}>
        <p className={styles["created-date"]}>Created 2019 @LenndaChen</p>
        <div className={styles["font-awesome-icons-3"]}>
          <div>
            <FontAwesomeIcon icon={faTwitterSquare} size="2x" />
          </div>
          <div>
            <FontAwesomeIcon icon={faFacebook} size="2x" />
          </div>
          <div>
            <FontAwesomeIcon icon={faInstagram} size="2x" />
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
