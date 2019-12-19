import React from "react";
import Modal from "react-modal";
import PropTypes from "prop-types";
import styles from "./CheckoutModal.module.css";
import { browserHistory } from 'react-router';
import { Link } from "react-router-dom";
import * as ROUTES from "../../constants/routes";

export default class CheckoutModal extends React.Component {
  state = {
    first: " ",
    last: " ",
    email: " ",
    cardInfo: " ",
  };
  componentDidMount() {
    const first = localStorage.getItem("First Name");
    const last = localStorage.getItem("Last Name");
    const email = localStorage.getItem("Email");
    const cardInfo = localStorage.getItem("Card Number");
    this.setState({ first, last, email, cardInfo });
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
    const { first, last, email, cardInfo } = this.state;
    localStorage.setItem("First Name", first);
    localStorage.setItem("Last Name", last);
    localStorage.setItem("Email", email);
    localStorage.setItem("Card Number", cardInfo);
  };

  handleOnSubmit = () => {
    return (
     browserHistory.push('/thankyou'));
  };

  render() {
    console.log("null", this.state.first)
    if (!this.props.show) {
      return null;
    }
    return (
      <form
        className={styles["form-in-checkout"]}
        onSubmit={this.handleFormSubmit}
      >
        <div className={styles["modal"]} id={styles["modal"]}>
          <h2> Checkout Page</h2>
          <div className={styles["content"]}>
            <input
              className={styles["content"]}
              type="text"
              placeholder="First Name"
              name="first"
              value={this.state.first}
              onChange={this.handleChange}
            ></input>
            <input
              className={styles["content"]}
              type="text"
              placeholder="Last Name"
              name="last"
              value={this.state.last}
              onChange={this.handleChange}
            ></input>
            <input
              className={styles["content"]}
              type="text"
              placeholder="Email"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
            ></input>
            <input
              className={styles["content"]}
              type="text"
              placeholder="Card Number"
              name="cardInfo"
              value={this.state.cardInfo}
              onChange={this.handleChange}
            ></input>
          </div>
          <div className={styles["actions"]}>
            <Link to={ROUTES.THANKYOU}><button
              type="button"
              className={styles["toggle-button"]}
              onClick={this.handleOnSubmit}
            >
              Submit
            </button></Link>
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
