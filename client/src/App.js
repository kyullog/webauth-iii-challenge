import React, { Component } from "react";
import { Route, NavLink } from "react-router-dom";

import Login from "./login/Login";
import Users from "./users/Users";
import Register from "./signin/Register";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <nav>
            <NavLink to="/signup">Sign Up</NavLink>
            &nbsp; | &nbsp;
            <NavLink to="/signin">Sign In</NavLink>
            &nbsp; | &nbsp;
            <NavLink to="/users">Users</NavLink>
          </nav>
        </header>
        <Route path="/signin" component={Login} />
        <Route path="/users" component={Users} />
        <Route path="/signup" component={Register} />
      </div>
    );
  }
}

export default App;
