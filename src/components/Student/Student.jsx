import React, { Component } from "react";
import Axios from "axios";
import "./Student.css";
import StudentDetails from "../StudentDetails";

class Student extends Component {
  state = {
    students: [],
    details: {}
  };

  async componentDidMount() {
    new Axios("https://student-management-api-1u3cd4j7s.now.sh/students").then(
      data => this.setState({ students: data.data })
    );
    // const studentData = await Axios(
    //   "https://student-management-api-1u3cd4j7s.now.sh/students"
    // );
    // this.setState({ students: studentData.data });
  }

  showDetails = index => {
    this.setState({
      details: {
        name: this.state.students[index].name,
        age: this.state.students[index].age
      }
    });
  };

  render() {
    return (
      <>
        <p>Student Data</p>
        {this.state.students.map((student, index) => (
          <span className="student" key={index}>
            <span onClick={() => this.showDetails(index)}>{student.name}</span>
            <span>: {student.age}</span>
          </span>
        ))}
        {Object.keys(this.state.details).length !== 0 && (
          <StudentDetails
            name={this.state.details.name}
            age={this.state.details.age}
          />
        )}
      </>
    );
  }
}

export default Student;
