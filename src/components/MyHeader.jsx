import React from "react";
import PropTypes from "prop-types";

const MyHeader = ({ children }) => {
  return <header>{children}</header>;
};

MyHeader.propTypes = {
  children: PropTypes.array
};

export default MyHeader;
