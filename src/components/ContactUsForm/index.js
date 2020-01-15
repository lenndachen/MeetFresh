import React, { PureComponent } from "react";
import styles from "../../components/ContactUsForm/ContactUsForm.module.css";

export default class ContactUsForm extends React.Component {

  refreshPage = () => {
    console.log("refresh page", this.props);
    this.props.onClick();
  };

  onClick = e => {
    this.props.onClick && this.props.onClick(e);
  };
  
  render() {
    return (
      <form className={styles["form"]}>
        <div className={styles["inside-form"]}>
          <select name="Subject">
            <option value="Customer">Customer</option>
            <option value="Cooperation">Cooperation</option>
          </select>
          <div className={styles["style-inputs"]}>
          <div>
            <input type="text" placeholder="Name" />
          </div>
          <div>
            <input type="text" placeholder="Phone" />
          </div>
          <div>
            <input type="text" placeholder="Email" />
            </div>
          </div>
          <div>
            <input
              className={styles["comments"]}
              type="text"
              placeholder="Comments"
            />
          </div>
        </div>
      </form>
    );
  }
}
