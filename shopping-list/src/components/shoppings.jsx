import React, { Component } from "react";
import Shopping from "./shopping";

class Shoppings extends Component {
  state = {
    items: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
      { id: 5, value: 0 }
    ]
  };

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
    return (
      <div>
        <button
          onClick={this.handleReset}
          className="btn btn-primary btn-smalls m-2"
        >
          Reset
        </button>
        {this.state.items.map(item => (
          <Shopping
            key={item.id}
            onDelete={this.handleDelete}
            onIncrement={this.handleIncrement}
            item={item}
          />
        ))}
      </div>
    );
  }
}

export default Shoppings;
