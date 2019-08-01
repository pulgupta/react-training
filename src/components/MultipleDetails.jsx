import React from "react";
import { connect } from "react-redux";

const MultipleDetails = props => {
  return (
    <React.Fragment>
      <br />
      <span
        className="pointer btn btn-danger"
        onClick={() => props.history.push("/student")}
      >
        Back
      </span>
      {props.students.map(student => (
        <table align="center">
          <tbody>
            <tr>
              <td>Name</td>
              <td>
                <strong>{student.name}</strong>
              </td>
            </tr>
            <tr>
              <td>Age</td>
              <td>
                <strong>{student.age}</strong>
              </td>
            </tr>
            <tr>
              <td>Class</td>
              <td>
                <strong>{student.class}</strong>
              </td>
            </tr>
            <tr>
              <td>Section</td>
              <td>
                <strong>{student.section}</strong>
              </td>
            </tr>
            <tr>
              <td>RollNumber</td>
              <td>
                <strong>{student.rollNumber}</strong>
              </td>
            </tr>
          </tbody>
        </table>
      ))}
    </React.Fragment>
  );
};

// Map Store to props is required whenever we want to read any data from the store.
// We specify the store property we want to read and then this property data will be
// available to us as a prop property.
const mapStoreToProps = store => {
  return {
    students: store.Student.multipleStudents
  };
};

// Since we are not calling any action here we have not used mapDispatchToProp
export default connect(
  mapStoreToProps,
  null
)(MultipleDetails);
