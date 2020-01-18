import React, { Component } from "react";
import Input from "./common/input";

class Login extends Component {
  state = {
    account: { username: "", password: "" },
    errors: {}
  };

  validate = () => {
    const errors = {};

    const { account } = this.state;
    if (account.username.trim() === "")
      errors.username = "Username is required";
    if (account.password.trim() === "")
      errors.password = "Password is required";
    return Object.keys(errors).length === 0 ? null : errors;
  };

  handleSubmit = e => {
    e.preventDefault();

    const errors = this.validate();

    this.setState({ errors: errors || {} });
    if (errors) return;

    console.log("submitted");
  };

  handleChange = ({ currentTarget: input }) => {
    const account = { ...this.state.account };
    account[input.name] = input.value;

    this.setState({ account });
  };
  render() {
    const { account, errors } = this.state;
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
            error={errors.username}
          />
          <Input
            name="password"
            value={account.password}
            label="Password"
            onChange={this.handleChange}
            placeholder="Password"
            error={errors.password}
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
