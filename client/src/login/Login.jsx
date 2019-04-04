import React, { Component } from "react";
import axios from "axios";

class Login extends Component {
  state = {
    username: "",
    password: ""
  };

  render() {
    return (
      <>
        <h2>Login</h2>
        <form onSubmit={this.submitHandler}>
          <input
            name="username"
            id="username"
            value={this.state.username}
            placeholder="Username"
            type="text"
            required
            onChange={this.changeHandler}
          />
          <input
            name="password"
            id="password"
            value={this.state.password}
            placeholder="Password"
            type="password"
            required
            onChange={this.changeHandler}
          />
          <button type="submit">Log In</button>
        </form>
      </>
    );
  }

  changeHandler = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  submitHandler = e => {
    e.preventDefault();
    const user = this.state;
    axios
      .post("http://localhost:2525/api/auth/login", user)
      .then(res => {
        localStorage.setItem("token", res.data.token);
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  };
}

export default Login;
