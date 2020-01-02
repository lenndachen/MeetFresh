import React from "react";
import Modal from "react-modal";
import PropTypes from "prop-types";
import styles from "./CheckoutModal.module.css";
import { browserHistory } from "react-router";
import { Link } from "react-router-dom";
import * as ROUTES from "../../constants/routes";
import credit from "../../assets/images/credit.jpg";
export default class CheckoutModal extends React.Component {
  state = {
    first: " ",
    last: " ",
    email: " ",
    cardInfo: " "
  };
  componentDidMount() {
    // const first = localStorage.getItem("First Name");
    // const last = localStorage.getItem("Last Name");
    // const email = localStorage.getItem("Email");
    // const cardInfo = localStorage.getItem("Card Number");
    // this.setState({ first, last, email, cardInfo });
  }

  handleChange = event => {
    const inputValue = event.target.value;
    const inputName = event.target.name;
    // console.log("input", input)
    this.setState({ [inputName]: inputValue });
  };
  onClose = e => {
    this.props.onClose && this.props.onClose(e);
  };
  handleFormSubmit = () => {
    console.log('payment')
    const { first, last, email, creditcard } = this.state;
    localStorage.setItem("First Name", first);
    localStorage.setItem("Last Name", last);
    localStorage.setItem("Email", email);
    localStorage.setItem("Card Number", creditcard);
    browserHistory.push("/thankyou");
  };

  // card number validation 
  cardNumber = (handleFormSubmit) => {
    var cardno = "/^(?:3[47][0-9]{13})$/";
    var cardno1 = "/^(?:4[0-9]{12}(?:[0-9]{3})?)$/";
    var cardno2 = "/^(?:6(?:011|5[0-9][0-9])[0-9]{12})$/";
    var cardno3 = "/^(?:5[1-5][0-9]{14})$/";
    if (handleFormSubmit.value.match(cardno, cardno1, cardno2, cardno3)) {
      return true;
    } else {
      alert("Not a valid credit card number!");
      return false;
    }

  }

  render() {
    console.log("null", this.state.first);
    if (!this.props.show) {
      return null;
    }
    return (
      <form className={styles["outer-modal"]}>
        <div className={styles["inner-modal"]} id={styles["modal"]}>
          <h2> Checkout Page</h2>
          <div className={styles["inside-modal-inputs"]}>
            <div className={styles["names"]}>
              <div>
                <div className={styles["text"]}>First Name</div>
                <input
                  className={styles["content"]}
                  type="text"
                  name="first"
                  value={this.state.first}
                  onChange={this.handleChange}
                ></input>
              </div>
              <div>
                <div className={styles["text"]}>Last Name</div>
                <input
                  className={styles["content"]}
                  type="text"
                  name="last"
                  value={this.state.last}
                  onChange={this.handleChange}
                ></input>
              </div>
            </div>
            <div>
              <div className={styles["text"]}>Email</div>
              <input
                className={styles["content2"]}
                type="text"
                name="email"
                value={this.state.email}
                onChange={this.handleChange}
              ></input>
            </div>
            <div className={styles["cardInfo"]}>
              <div className={styles["credit-card-pics"]}>
                <img
                  src={credit}
                  className={styles["credit-card-form"]}
                  alt="credit card logo pics"
                  height={50}
                />
              </div>
              <div className={styles["text"]}>Card Info.</div>
              <input
                className={styles["content1"]}
                type="text"
                name="creditcard"
                min={15}
                max={16}
                value={this.state.cardNumber}
                onChange={this.handleFormSubmit}
                // required
              />
            </div>
          </div>
          <div className={styles["actions"]}>
            <Link to={ROUTES.THANKYOU}>
              <button
                type="button"
                className={styles["toggle-button"]}
                onClick={this.handleFormSubmit}
              >
                Submit
              </button>
            </Link>
          </div>
        </div>
      </form>
    );
  }
}

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  show: PropTypes.bool.isRequired
};
