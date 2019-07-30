import React, { Component } from "react";
import logo from "../logo.svg";

// just copied the same thing from app.js so that we can create an actual component
class Img extends Component {
  state = {};
  render() {
    return <img src={logo} className="App-logo" alt={this.props.alt} />;
  }
}

export default Img;
