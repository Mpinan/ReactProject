import React, { Component } from "react";
import Shopping from "./shopping";

class Shoppings extends Component {
  state = {
    Shoppings: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
      { id: 5, value: 0 }
    ]
  };
  handleDelete = shopId => {
    console.log("Event handle called", shopId);
  };
  render() {
    return (
      <div>
        {this.state.Shoppings.map(shop => (
          <Shopping
            key={shop.id}
            onDelete={this.handleDelete}
            value={shop.value}
            id={shop.id}
          />
        ))}
      </div>
    );
  }
}

export default Shoppings;
