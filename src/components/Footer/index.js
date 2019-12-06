import React from 'react'
import styles from "./Footer.module.css"

class Footer extends React.Component{
    render() {
        return (
          <div className={styles["footer"]}>
            <p>Created 2019 @LenndaChen</p>
          </div>
        );
    }
}

export default Footer;