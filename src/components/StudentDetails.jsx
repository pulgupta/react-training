import React from "react";
import { connect } from "react-redux";

const StudentDetails = props => {
  if (!props.student.name) {
    props.history.push("/student");
  }
  return (
    <React.Fragment>
      <br />
      <span
        className="pointer btn btn-danger"
        onClick={() => props.history.push("/student")}
      >
        Back
      </span>
      <br />
      <br />
      <table align="center">
        <tbody>
          <tr>
            <td>Name</td>
            <td>
              <strong>{props.student.name}</strong>
            </td>
          </tr>
          <tr>
            <td>Age</td>
            <td>
              <strong>{props.student.age}</strong>
            </td>
          </tr>
          <tr>
            <td>Class</td>
            <td>
              <strong>{props.student.class}</strong>
            </td>
          </tr>
          <tr>
            <td>Section</td>
            <td>
              <strong>{props.student.section}</strong>
            </td>
          </tr>
          <tr>
            <td>RollNumber</td>
            <td>
              <strong>{props.student.rollNumber}</strong>
            </td>
          </tr>
        </tbody>
      </table>
    </React.Fragment>
  );
};

// Map Store to props is required whenever we want to read any data from the store.
// We specify the store property we want to read and then this property data will be
// available to us as a prop property.
const mapStoreToProps = store => {
  return {
    student: store.Student.selectedStudent
  };
};

// Since we are not calling any action here we have not used mapDispatchToProp
export default connect(
  mapStoreToProps,
  null
)(StudentDetails);
