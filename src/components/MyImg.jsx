import React from "react";
import logo from "../logo.svg";
import PropTypes from "prop-types";

// just copied the same thing from app.js so that we can create an actual component
const MyImg = props => {
  if (!props.alt) {
    throw "sasa";
  }
  let alt1 = "hello-" + props.alt;
  return <img src={logo} className="App-logo" alt={alt1} />;
};

MyImg.propTypes = {
  alt: PropTypes.string
};

export default MyImg;
