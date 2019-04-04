import React, { Component } from "react";
import { Route, NavLink } from "react-router-dom";

import Login from "./login/Login";
import Users from "./users/Users";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <nav>
            <NavLink to="/signin">Sign In</NavLink>
            &nbsp; | &nbsp;
            <NavLink to="/users">Users</NavLink>
          </nav>
        </header>
        <Route path="/signin" component={Login} />
        <Route path="/users" component={Users} />
      </div>
    );
  }
}

export default App;
