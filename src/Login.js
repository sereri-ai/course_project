import React, { Component } from "react";
 
class Login extends Component {
  render() {
    return (
      <div>
        <label>Username: </label>
        <input type="text" placeholder="Enter Username"/><br></br>
        <label>Password: </label>
        <input type="password" placeholder="Enter Password"/>
        <button type="submit">Login</button>
      </div>
    );
  }
}
 
export default Login;