import React, { Component } from "react";
import { Route, NavLink } from "react-router-dom";

import Login from "./login/Login";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <nav>
            <NavLink to="/login">LogIn</NavLink>
            &nbsp; | &nbsp;
            <NavLink to="/users">Users</NavLink>
          </nav>
        </header>
        <Route path="/login" component={Login} />
      </div>
    );
  }
}

export default App;
