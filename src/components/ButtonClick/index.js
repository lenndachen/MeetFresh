import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowAltCircleDown,
  faArrowAltCircleUp
} from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import PreviewItem from "./../PreviewItem/index";
import { CartConsumer } from "../../Context/CartContext";

library.add(faArrowAltCircleDown);
class ButtonClick extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            clicks: 0,
            show: true,
            number: 0,
        }
    }
    PreviewQuantityEqualsClicks = () => {
        this.setState = ({
            // eslint-disable-next-line no-undef
            clicks: <PreviewItem previewItem={cartItem} />
        })
    }
    IncrementItem = (clicks) => {
        const number = <PreviewItem previewItem={cartItem} />
        this.setState({ number: cartItem + 1 });
    }
    
    DecreaseItem = () => {
        const number = <PreviewItem previewItem={cartItem} />
        this.setState({ number: cartItem - 1 });
    }

    render() {
        return (
          <CartConsumer>
                {props => {
                console.log("cart preview", props.state.cart);
              return (
                <div>
                  <FontAwesomeIcon
                    icon={faArrowAltCircleUp}
                    onClick={this.IncrementItem}
                  >
                    {" "}
                    Up
                  </FontAwesomeIcon>
                  <FontAwesomeIcon
                    icon={faArrowAltCircleDown}
                    onClick={this.DecreaseItem}
                  >
                    {" "}
                    Down{" "}
                  </FontAwesomeIcon>
                  {this.state.show ? <h2>{this.state.clicks}</h2> : ""}
                </div>
              );
            }}
          </CartConsumer>
        );
    }
}

export default ButtonClick;