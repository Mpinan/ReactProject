import React, { Component } from "react";

class Shopping extends Component {
  state = {
    value: this.props.item.value
  };

  handleIncrement = product => {
    this.setState({ value: this.state.value + 1 });
  };

  render() {
    return (
      <div>
        <button
          onClick={this.handleResets}
          className="btn btn-primary btn-smalls m-2"
        >
          Reset
        </button>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={this.handleIncrement}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>

        <button
          onClick={() => {
            this.props.onDelete(this.props.item.id);
          }}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value: count } = this.state;

    return count === 0 ? "Zero" : count;
  }
}

export default Shopping;
