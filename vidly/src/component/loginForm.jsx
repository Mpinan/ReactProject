import React, { Component } from "react";

class Login extends Component {
  state = {
    account: { username: "", password: "" }
  };
  handleSubmit = e => {
    e.preventDefault();
    console.log("Submitted");
  };

  handleChange = e => {
    const account = { ...this.state.account };
    account.username = e.currentTarget.value;
    this.setState({ account });
  };
  render() {
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              value={this.state.account.username}
              onChange={this.handleChange}
              autoFocus
              ref={this.username}
              type="text"
              className="form-control"
              placeholder="Username"
            />
            <small id="username" className="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Password"
            />
          </div>
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
