import React from "react";
import Modal from "react-modal";
import PropTypes from "prop-types";
import styles from "./CheckoutModal.module.css";
import { browserHistory } from "react-router";
import { Link } from "react-router-dom";
import * as ROUTES from "../../constants/routes";
import credit from "../../assets/images/credit.jpg";
import Cleave from "cleave.js/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

library.add(faTimes);
export default class CheckoutModal extends React.Component {
  constructor(props) {
    super(props);
    // this.creditCardValidator = this.creditCardValidator.bind(this);
    this.state = {
      first: " ",
      last: " ",
      email: " ",
      creditcard: " ",
      loom: " "
    };
  }

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
    this.setState(
      {
        [inputName]: inputValue
        // event.target.creditcard,
      },
      () => {
        if (inputName === "creditcard") {
          this.formatCardNumber(this.state.creditcard);
        }
      }
    );
  };
  onClose = e => {
    this.props.onClose && this.props.onClose(e);
  };
  handleFormSubmit = () => {
    console.log("payment");
    const { first, last, email, creditcard } = this.state;
    localStorage.setItem("First Name", first);
    localStorage.setItem("Last Name", last);
    localStorage.setItem("Email", email);
    localStorage.setItem("Card Number", creditcard);
    browserHistory.push("/thankyou");
  };

  //split string where spaces are and then ultimately save that as formattedCard
  formatCardNumber = cardNumber => {
    console.log("loop", cardNumber);
    let arr = cardNumber.split("");
    console.log("arr.length", arr.length);
    arr.splice(4, 0, " ");
    // arr.splice(9, 0, " ");
    // arr.splice(14, 0, " ");
    const loom = arr.join("");
    console.log(loom);
    this.setState({
      loom: loom.trim()
    });
  };

  onCreditCardChange = event => {
    // formatted pretty value
    console.log(event.target.value);

    // raw value
    console.log(event.target.rawValue);
  };

  onCreditCardFocus = event => {
    // update some state
  };

  formatCreditCard = () => {
    new Cleave(".logo-form", {
      creditCard: true,
      onCreditCardTypeChanged: function(type) {
        // update UI ...
      }
    });
  };

  refreshPage() {
    window.location.reload(false);
  }

  render() {
    console.log("null", this.state.first);
    if (!this.props.show) {
      return null;
    }
    return (
      <form className={styles["outer-modal"]}>
        <div className={styles["inner-modal"]} id={styles["modal"]}>
          <div className={styles["font-awesome-x-beside-checkout"]}>
            <FontAwesomeIcon className={styles["fa-times"]} icon={faTimes} onClick={this.refreshPage}/>
            <h2> Checkout Page</h2>
          </div>
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
              <Cleave
                className={styles["logo-form"]}
                id={this.formatCreditCard}
                placeholder="Enter credit card number"
                options={{ creditCard: true }}
                onFocus={this.onCreditCardFocus}
                onChange={this.onCreditCardChange}
              />
              <div className={styles["cvv-placeholder"]}>
                <input
                  className={styles["cvv-placeholder"]}
                  placeholder="CVV"
                  type="cvv"
                  required
                  minLength="3"
                  maxLength="3"
                />
                <input
                  className={styles["cvv-placeholder"]}
                  placeholder="Expire Date"
                  type="cvv"
                  required
                  minLength="4"
                  maxLength="4"
                />
                <div></div>
              </div>
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
