import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import * as ROUTES from "./constants/routes";
import Home from "./containers/Home";
import { CartProvider } from "./Context/CartContext.js";
import Checkout from "./containers/Checkout";

function App() {
  return (
    <CartProvider>
      <Router>
      <Switch>
            <Route exact path={ROUTES.HOME} component={Home} />
            <Route exact path={ROUTES.CHECKOUT} component={Checkout} />
      </Switch>
      </Router>
    </CartProvider>
  );
}

export default App;
