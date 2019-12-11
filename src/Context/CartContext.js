import React from 'react'

const CartContext = React.createContext();

// export const CartProvider = CartContext.Provider;

const Reducer = (state, action) => {
  console.log('heoak;dfja;dkfja', state, action.payload);
  switch (action.type) {
      case "ADD_CART_ITEM":
          console.log(action.payload);
          return {
              ...state,
              cart: [action.payload, ...state.cart]
          };
      case "ADD_COST":
          return {
              ...state,
              cartTotal: state.cartTotal + action.payload
          };
      case "ADD_QUANTITY":
          let cart = state.cart 
          cart.splice(action.payload.i, 1, action.payload.item)
          console.log('quantity', action.payload, state.cart);
          return {
              ...state,
               cart: cart
    }; 
    case "GET_TOTAL":
        let total = 0;
        let itemTotal = 0;
        let itemNumbers = 0;
        let cartTotal = state.cart 
        cartTotal.map(item => {
               itemTotal = item.quantity * item.price
               total = total + itemTotal;
               itemNumbers = itemNumbers + item.quantity
            })
            return {
                ...state,
                 cartTotal: total,
                 cartItems: itemNumbers
           }

      default:
          return state;
  }
};

export class CartProvider extends React.Component {
  state = {
      cart: [],
      cartTotal: 0,
      cartItems: 0,
      dispatch: action => {
          this.setState(state => Reducer(state, action));
      }
  };

//   getTotal = () => {
//     let total = 0;
//     if (this.state) {
//         let cart = this.state.cart
//         let itemTotal = 0;
//         cart.map(item => {
//            itemTotal = item.quantity * item.price
//            total = total + itemTotal;
//         })
//     } 
//     return total;
//   }
  async componentDidMount() {

  }

  render() {
      return (
          <CartContext.Provider value ={{
            state: this.state
          }}>
            {this.props.children}
          </CartContext.Provider>
      );
  }
}

export const CartConsumer = CartContext.Consumer;