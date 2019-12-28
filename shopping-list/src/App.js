import React, { Component } from "react";
import NavBar from "./components/navbar";
import Shoppings from "./components/shoppings";
import "./App.css";

class App extends Component {
  state = {
    items: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
      { id: 5, value: 0 }
    ]
  };

  constructor() {
    super();
    console.log("App - constructor");
  }

  componentDidMount() {
    console.log("App - Mounted");
  }

  handleIncrement = item => {
    console.log(item);
    const items = [...this.state.items];
    const index = items.indexOf(item);
    items[index] = { ...item };
    items[index].value++;
    this.setState({ items });
  };

  handleDelete = itemId => {
    const items = this.state.items.filter(i => i.id !== itemId);
    this.setState({ items });
  };

  handleReset = () => {
    const items = this.state.items.map(i => {
      i.value = 0;
      return i;
    });
    this.setState({ items });
  };

  render() {
    console.log("App - rendered");
    return (
      <React.Fragment>
        <NavBar totalItems={this.state.items.filter(i => i.value > 0).length} />
        <main className="container">
          <Shoppings
            items={this.state.items}
            onReset={this.handleReset}
            onDelete={this.handleDelete}
            onIncrement={this.handleIncrement}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
