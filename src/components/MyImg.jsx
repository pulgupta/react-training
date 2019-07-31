import React from "react";
import logo from "../logo.svg";
import PropTypes from "prop-types";

// just copied the same thing from app.js so that we can create an actual component
const MyImg = props => {
  return <img src={logo} className="App-logo" alt={props.alt} />;
};

MyImg.propTypes = {
  alt: PropTypes.string
};

export default MyImg;
