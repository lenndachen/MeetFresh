// import React from 'react'
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faArrowAltCircleDown,
//   faArrowAltCircleUp
// } from "@fortawesome/free-solid-svg-icons";
// import { library } from "@fortawesome/fontawesome-svg-core";
// import PreviewItem from "./../PreviewItem/index";
// import { CartConsumer } from "../../Context/CartContext";
// import Item from "../../components/Item";
// import items from "../../components/items.json";
// import previewItem from "../../components/PreviewItem/index";
// library.add(faArrowAltCircleDown);
// class ButtonClick extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       clicks: 0,
//       show: true,
//       number: previewItem.quantity,
//     };
//   }
//   // PreviewQuantityEqualsClicks = (previewItem) => {
//   //     this.setState = {
//   //       // eslint-disable-next-line no-undef
//   //       clicks: <PreviewItem previewItem={previewItem.quantity} />
//   //     };
//   // }
//   // IncrementItem = (previewItem) => {
//   //     this.setState({ number: previewItem.quantity + 1 });
//   // }

//   // DecreaseItem = (previewItem) => {
//   //     this.setState({ number: previewItem.quantity - 1 });
//   // }

//   addition = async (dispatch, item, cart) => {
//     console.log("current cart", cart);
//     const inCart = cart.some(cartItem => cartItem.itemID === item.itemID);
//     if (!inCart) {
//       item.quantity = 1;
//       dispatch({ type: "ADD_CART_ITEM", payload: item });
//       dispatch({ type: "GET_TOTAL" });
//     } else {
//       cart.map((cartItem, i) => {
//         console.log("cart item", cartItem);
//         if (cartItem.itemID == item.itemID) {
//           item.quantity = item.quantity + 1;
//           dispatch({ type: "ADD_QUANTITY", payload: { item, i } });
//           dispatch({ type: "GET_TOTAL" });
//         }
//       });
//     }
//   };

//   render() {
//     return (
//       <CartConsumer>
//         {props => {
//           console.log("cart preview", props.state.cart);
//           return (
//             <div>
//               <FontAwesomeIcon
//                 icon={faArrowAltCircleUp}
//                 onClick={this.addition}
//               >
//                 {" "}
//                 Up
//               </FontAwesomeIcon>
//               <FontAwesomeIcon
//                 icon={faArrowAltCircleDown}
//                 onClick={this.DecreaseItem}
//               >
//                 {" "}
//                 Down{" "}
//               </FontAwesomeIcon>
//             </div>
//           );
//         }}
//       </CartConsumer>
//     );
//   }
// }

// export default ButtonClick;