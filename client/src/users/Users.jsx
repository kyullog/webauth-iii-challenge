import React, { Component } from "react";
import axios from "axios";

class Users extends Component {
  state = {
    users: [],
    status: null
  };

  componentDidMount() {
    const token = localStorage.getItem("token");
    console.log(token);
    if (token) {
      const headers = { authorization: token };
      axios
        .get(`http://localhost:2525/api/users`, { headers })
        .then(res => this.setState({ users: res.data, status: res.status }))
        .catch(err => console.log(console.log(err)));
    } else {
      this.props.history.push("/signin");
    }
  }

  render() {
    return (
      <>
        <ul>
          {this.state.users.map(user => (
            <li key={user.id}>
              <h3>Username: {user.username}</h3>
              <h4>Department: {user.department}</h4>
            </li>
          ))}
        </ul>
        {this.state.status !== 200 && <h3>Please Log In</h3>}
      </>
    );
  }
}

export default Users;
