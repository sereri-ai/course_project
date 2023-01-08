import React, { Component } from "react";
 
class Home extends Component {
  render() {
    return (
      <div>
        <h2>Welcome to the Twisted Crab</h2>
        <p>Fresh seafood straight from the water to the kitchen!</p>
        <p>Orders available for pickup and delivery!</p>
        <img src={require('./tc.jpg')} alt="ENTREE"></img>
      </div>
    );
  }
}
 
export default Home;