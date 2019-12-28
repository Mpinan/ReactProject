import React, { Component } from "react";

class Shopping extends Component {
  componentDidUpdate(prevProps, prevState) {
    console.log("prevProps", prevProps);
    console.log("prevState", prevState);
  }

  componentWillUnmount() {
    console.log("Shopping - unmount");
  }
  render() {
    console.log("Shopping - rendered");
    return (
      <div className="row">
        <div className="col-1">
          <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        </div>
        <div className="col">
          <button
            onClick={() => {
              this.props.onIncrement(this.props.item);
            }}
            className="btn btn-secondary btn-sm m-2"
          >
            +
          </button>

          <button
            onClick={() => {
              this.props.onDecrement(this.props.item);
            }}
            className="btn btn-secondary btn-sm m-2"
          >
            -
          </button>

          <button
            onClick={() => {
              this.props.onDelete(this.props.item.id);
            }}
            className="btn btn-danger btn-sm"
          >
            Delete
          </button>
        </div>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.item.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value: count } = this.props.item;

    return count === 0 ? "Zero" : count;
  }
}

export default Shopping;
