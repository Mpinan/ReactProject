import React, { Component } from "react";
import Shopping from "./shopping";

class Shoppings extends Component {
  render() {
    return (
      <div>
        <button
          onClick={this.props.onReset}
          className="btn btn-primary btn-smalls m-2"
        >
          Reset
        </button>
        {this.props.items.map(item => (
          <Shopping
            key={item.id}
            onDelete={this.props.onDelete}
            onIncrement={this.props.onIncrement}
            item={item}
          />
        ))}
      </div>
    );
  }
}

export default Shoppings;
