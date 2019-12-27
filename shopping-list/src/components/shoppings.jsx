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

  handleDelete = itemId => {
    const items = this.state.items.filter(i => i.id !== itemId);
    this.setState({ items });
  };

  handleReset = () => {
    this.state.items.map(i => {
      i.value = 0;
      return i;
    });
    this.setState({ items });
  };

  render() {
    return (
      <div>
        {this.state.items.map(item => (
          <Shopping
            key={item.id}
            value={item.value}
            onDelete={this.handleDelete}
            item={item}
          />
        ))}
      </div>
    );
  }
}

export default Shoppings;
