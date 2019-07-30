import React, { Component } from "react";
import Axios from "axios";
import "./Student.css";

class Student extends Component {
  state = {
    students: []
  };

  async componentDidMount() {
    const studentData = await Axios(
      "https://student-management-api-1u3cd4j7s.now.sh/students"
    );
    this.setState({ students: studentData.data });
  }

  render() {
    return (
      <>
        <p>Student Data</p>
        {this.state.students.map(student => (
          <table className="student">
            <tbody>
              <tr>
                <td>Name:</td>
                <td>
                  <span>{student.name}</span>
                </td>
              </tr>
              <tr>
                <td>Age:</td>
                <td>
                  <span>{student.age}</span>
                </td>
              </tr>
            </tbody>
          </table>
        ))}
      </>
    );
  }
}

export default Student;
