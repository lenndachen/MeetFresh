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

      default:
          return state;
  }
};

export class CartProvider extends React.Component {
  state = {
      cart: [],
      cartTotal: 0,
      dispatch: action => {
          this.setState(state => Reducer(state, action));
      }
  };

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