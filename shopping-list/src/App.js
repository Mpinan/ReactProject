import React, { Component } from "react";
import NavBar from "./components/navbar";
import Shoppings from "./components/shoppings";
import "./App.css";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <main className="container">
          <Shoppings />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
