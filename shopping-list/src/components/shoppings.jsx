import React, { Component } from "react";
import Shopping from "./shopping";

class Shoppings extends Component {
  render() {
    console.log("Shoppings - rendered");
    const { onReset, items, onDelete, onIncrement } = this.props;
    return (
      <div>
        <button onClick={onReset} className="btn btn-primary btn-smalls m-2">
          Reset
        </button>
        {items.map(item => (
          <Shopping
            key={item.id}
            onDelete={onDelete}
            onIncrement={onIncrement}
            item={item}
          />
        ))}
      </div>
    );
  }
}

export default Shoppings;
