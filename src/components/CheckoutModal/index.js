import React from 'react'
import Modal from "react-modal";
import PropTypes from "prop-types";
import styles from "./CheckoutModal.module.css"
export default class CheckoutModal extends React.Component {
  onClose = e => {
    this.props.onClose && this.props.onClose(e);
  };
  render() {
    if (!this.props.show) {
      return null;
    }
    return (
      <div class={styles["modal"]} id={styles["modal"]}>
        <h2> Checkout Page</h2>
        <div class={styles["content"]}>
          {this.props.children}
          <input placeholder="First Name"></input>
        </div>
        <div class={styles["actions"]}>
          <button class={styles["toggle-button"]} onClick={this.onClose}>
            close
          </button>
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  show: PropTypes.bool.isRequired
};
