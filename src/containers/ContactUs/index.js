import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import styles from "./ContactUs.module.css";
class ContactUs extends React.Component {
  render() {
    return (
      <div>
        <div>
          <Header />
        </div>
        <form className={styles["form"]}>
          <div>
            <input type="text" placeholder="Name" />
          </div>
          <div>
            <input type="text" placeholder="Phone" />
          </div>
          <div>
            <input type="text" placeholder="Email" />
          </div>
          <select name="Subject">
            <option value="Customer">Customer</option>
            <option value="Cooperation">Cooperation</option>
          </select>
          <div>
            <input type="text" placeholder="Comments" />
          </div>
          <div>
            <input type="submit" /> 
          </div>
        </form>
        <div>
          <Footer />
        </div>
      </div>
    );
  }
}

export default ContactUs;
