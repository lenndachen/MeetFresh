import React from "react";
import Home from "./containers/Home";
import { CartProvider } from "./Context/CartContext.js";

function App() {
  return (
    <CartProvider>
      <div className="App">
        <Home />
      </div>
    </CartProvider>
  );
}

export default App;
