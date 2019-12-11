import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import styles from "./ContactUs.module.css";
class ContactUs extends React.Component {
  foo() {
    alert("Form has been submitted successfully");
    return true;
  }

  render() {
    return (
      <div>
        <div>
          <Header />
        </div>
        <form className={styles["form"]}>
          <div className={styles["words-inside-form"]}>
            We thank you and appreciate your visit to our website. Please send
            us your valuable comments if you have any recommendations for our
            products. We are dedicated to responding and following up to all
            your inquiries. PARTNERS- Thank you for your support and love for
            Meet Fresh. We look forward to cooperating with franchising
            partners, and introducing Meet Fresh to the world. To become a
            future partner, please kindly fill in the『Application Form』 on our
            PARTNERS page.
          </div>
          <div className={styles["inside-form"]}>
            <select name="Subject">
              <option value="Customer">Customer</option>
              <option value="Cooperation">Cooperation</option>
            </select>
            <div>
              <input type="text" placeholder="Name" />
            </div>
            <div>
              <input type="text" placeholder="Phone" />
            </div>
            <div>
              <input type="text" placeholder="Email" />
            </div>
            <div>
              <input
                className={styles["comments"]}
                type="text"
                placeholder="Comments"
              />
            </div>
            <div>
              <input type="submit" onclick={this.foo()} />
            </div>
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
