import React from "react";

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

export default MyAnchor;
