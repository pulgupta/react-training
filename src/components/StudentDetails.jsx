import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

const StudentDetails = props => {
  return (
    <React.Fragment>
      <div>
        <span>Name of the selected student is: {props.student.name}</span>
      </div>
      <div>
        <span>
          Age of {props.student.name} is {props.student.age}
        </span>
      </div>
    </React.Fragment>
  );
};

const mapStoreToProps = store => {
  console.log("store is", store);
  return {
    student: store.SelectedStudent.selectedStudent
  };
};

export default connect(
  mapStoreToProps,
  null
)(StudentDetails);
