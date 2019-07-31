import React from "react";
import { connect } from "react-redux";

const StudentDetails = props => {
  return (
    <React.Fragment>
      <a href="/student">Back</a>
      <br />
      <br />
      <div>
        <p>Name of the selected student is: {props.student.name}</p>
        <p>
          Age of {props.student.name} is {props.student.age}
        </p>
        <p>Class is: {props.student.class}</p>
        <p>Section is: {props.student.section}</p>
        <p>Roll Number is: {props.student.rollNumber}</p>
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
