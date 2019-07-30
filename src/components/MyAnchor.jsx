import React from "react";
import PropTypes from "prop-types";

// Functional component
const MyAnchor = ({ text, href }) => {
  return (
    <a
      className="App-link"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      {text}
    </a>
  );
};

MyAnchor.propTypes = {
  text: PropTypes.string,
  href: PropTypes.string
};

export default MyAnchor;
