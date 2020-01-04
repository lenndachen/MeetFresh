import React from "react";
import Modal from "react-modal";
import PropTypes from "prop-types";
import styles from "./CheckoutModal.module.css";
import { browserHistory } from "react-router";
import { Link } from "react-router-dom";
import * as ROUTES from "../../constants/routes";
import credit from "../../assets/images/credit.jpg";
export default class CheckoutModal extends React.Component {
  constructor(props) {
    super(props)
    this.creditCardValidator = this.creditCardValidator.bind(this);
    this.state = {
      first: " ",
      last: " ",
      email: " ",
      creditcard: " "
    };
  }
  
  componentDidMount() {
    // const first = localStorage.getItem("First Name");
    // const last = localStorage.getItem("Last Name");
    // const email = localStorage.getItem("Email");
    // const cardInfo = localStorage.getItem("Card Number");
    // this.setState({ first, last, email, cardInfo });
  }

  handleChange = (event) => {
    const inputValue = event.target.value;
    const inputName = event.target.name;
    // console.log("input", input)
    this.setState({
      [inputName]: inputValue,
      // event.target.creditcard,
    }, () => {
        if (inputName === "creditcard") {
         this.Havena(this.state.creditcard);
        }
    });
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
  // cardNumber = (handleFormSubmit) => {
  //   var cardno = "/^(?:3[47][0-9]{13})$/";
  //   var cardno1 = "/^(?:4[0-9]{12}(?:[0-9]{3})?)$/";
  //   var cardno2 = "/^(?:6(?:011|5[0-9][0-9])[0-9]{12})$/";
  //   var cardno3 = "/^(?:5[1-5][0-9]{14})$/";
  //   if (handleFormSubmit.value.match(this.creditcard(cardno, cardno1, cardno2, cardno3))) {
  //     return true;
  //   } else {
  //     alert("Not a valid credit card number!");
  //     return false;
  //   }

  // }

  Havena=()=>{
  this.creditCardValidator.validate = (value, ccType) => {
      value = String(value).replace(/[- ]/g, ' ');

      var cardinfo = this.creditCardValidator.cards, results = [];
      if (ccType) {
        var expr = 'v' + cardinfo[ccType.toLowerCase()] + '$';
        return expr ? !!value.match(expr) : false;
      }

      for (var p in cardinfo) {
        if (value.match('^' + cardinfo[p] + '$')) {
          results.push(p);
        }
      }
      return results.length ? results.join('|') : false;
    }
  }
  creditCardValidator() {
    console.log("string")
    this.creditCardValidator.cards = {
      'mc': '5[1-5][0-9]{14}',
      'ax': '3[47][0-9]{13}',
      'dc': '6011[0-9]{12}',
      'vi': '4(?:[0-9]{12} | [0-9] {15})',
    }
    this.creditCardValidator.validate = (value, ccType) => {
      value = String(value).replace(/[- ]/g, ' ');

      var cardinfo = this.creditCardValidator.cards, results = [];
      if (ccType) {
        var expr = 'v' + cardinfo[ccType.toLowerCase()] + '$';
        return expr ? !!value.match(expr) : false;
      }

      for (var p in cardinfo) {
        if (value.match('^' + cardinfo[p] + '$')) {
          results.push(p);
        }
      }
      return results.length ? results.join('|') : false;
    }
  }

  

  formatCardNumber = (cardNumber) => { 
    console.log(cardNumber);
    let formattedCard = cardNumber
    //split string where spaces are and then ultimately save that as formattedCard
    return formattedCard;
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
                  onInput={this.cardNumber}
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
                  value={this.state.creditcard}
                  onChange={this.handleChange} // took out because handleFormSubmit is inside cardNumber
                  //included to see if onChange and onInput works at the same time, can two functions be put in onChange or can both be used in one < />
                  //onInput={this.cardNumber}
                // required
              /> 
              {this.formatCardNumber(this.state.creditcard)}
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
