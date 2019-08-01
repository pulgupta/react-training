import React from "react";
import { connect } from "react-redux";

const StudentDetails = props => {
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
            <td>Roll Number</td>
            <td>
              <strong>{props.student.rollNumber}</strong>
            </td>
          </tr>
        </tbody>
      </table>
    </React.Fragment>
  );
};

const mapStoreToProps = store => {
  return {
    student: store.SelectedStudent.selectedStudent
  };
};

export default connect(
  mapStoreToProps,
  null
)(StudentDetails);
