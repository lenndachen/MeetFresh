import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import * as ROUTES from "./constants/routes";
import Home from "./containers/Home";
import { CartProvider } from "./Context/CartContext.js";
import Checkout from "./containers/Checkout";
import AboutUs from "./containers/AboutUs";
import OrderHere from "./containers/OrderHere";
import ContactUs from "./containers/ContactUs";
import ThankYou from "./containers/Thankyou";

function App() {
  return (
    <CartProvider>
      <Router>
        <Switch>
          <Route exact path={ROUTES.HOME} component={Home} />
          <Route exact path={ROUTES.CHECKOUT} component={Checkout} />
          <Route exact path={ROUTES.ABOUTUS} component={AboutUs} />
          <Route exact path={ROUTES.CONTACTUS} component={ContactUs} />
          <Route exact path={ROUTES.ORDERHERE} component={OrderHere} />
          <Route exact path={ROUTES.THANKYOU} component={ThankYou} />
        </Switch>
      </Router>
    </CartProvider>
  );
}


export default App;
