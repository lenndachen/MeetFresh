import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import styles from "./ContactUs.module.css";
import ContactUsForm from "../../components/ContactUsForm";
class ContactUs extends React.Component {
  constructor(props) {
    super(props);
  
    this.state = { isOpen: false };
  }

  toggleModal = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  
  render() {
    return (
      <div>
        <div>
          <Header />
        </div>
        <div>
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
        </div>
        <div>
          {this.state.isOpen &&
          <ContactUsForm show={this.state.isOpen} onClose={this.toggleModal}

        />}
          <button type="button" onClick={e => { this.toggleModal(e); }}>
            OPEN ME!
          </button>
        </div>
        <div>
          <Footer />
        </div>
      </div>
    );
  }
}

export default ContactUs;
