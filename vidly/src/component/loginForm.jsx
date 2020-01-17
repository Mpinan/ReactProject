import React, { Component } from "react";
import Input from "./common/input";

class Login extends Component {
  state = {
    account: { username: "", password: "" },
    errors: {}
  };

  validate = () => {
    return { username: "Username is required" };
  };

  handleSubmit = e => {
    e.preventDefault();

    const errors = this.validate();
    this.setState({ errors });
    if (errors) return;
  };

  handleChange = ({ currentTarget: input }) => {
    const account = { ...this.state.account };
    account[input.name] = input.value;

    this.setState({ account });
  };
  render() {
    const { account } = this.state;
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          <Input
            name="username"
            value={account.username}
            label="Username"
            onChange={this.handleChange}
            placeholder="Username"
          />
          <Input
            name="username"
            value={account.password}
            label="Password"
            onChange={this.handleChange}
            placeholder="Password"
          />

          <div className="form-check">
            <div style={{ padding: 10 }}>
              <input type="checkbox" className="form-check-input" id="" />
              <label className="form-check-label" htmlFor="exampleCheck1">
                Check me out
              </label>
            </div>
          </div>
          <button type="submit" className="btn btn-primary">
            Login
          </button>
        </form>
      </div>
    );
  }
}

export default Login;
