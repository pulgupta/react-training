import React from "react";
import PropTypes from "prop-types";

const StudentDetails = ({ name, age }) => {
  return (
    <React.Fragment>
      <div>
        <span>Name of the selected student is: {name}</span>
      </div>
      <div>
        <span>
          Age of {name} is {age}
        </span>
      </div>
    </React.Fragment>
  );
};

StudentDetails.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number
};

export default StudentDetails;
