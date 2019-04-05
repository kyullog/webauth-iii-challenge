import React, { Component } from "react";
import axios from "axios";

class Register extends Component {
  state = {
    username: "",
    department: "",
    password: "",
    error: ""
  };

  render() {
    return (
      <div class="form-wrapper">
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
            name="department"
            id="department"
            value={this.state.department}
            placeholder="Department"
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
        {this.state.error && <p className="message">{this.state.error}</p>}
      </div>
    );
  }

  changeHandler = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  submitHandler = e => {
    e.preventDefault();
    const { username, department, password } = this.state;
    const user = { username, department, password };
    axios
      .post("http://localhost:2525/api/auth/register", user)
      .then(res => {
        console.log(res);
        localStorage.setItem("token", res.data.token);
        this.props.history.push("/users");
      })
      .catch(err => {
        this.setState({ error: "Please try another username" });
      });
  };
}

export default Register;
