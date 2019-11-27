import React from "react";
import Home from "./containers/Home";
import AppProvider from "./Context/index";

function App() {
  return (
    <AppProvider>
      <div className="App">
        <Home />
      </div>
    </AppProvider>
  );
}

export default App;
