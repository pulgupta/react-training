import React, { Component } from "react";
import Axios from "axios";
import "./Student.css";

const DisplayDetails = ({ name, age }) => {
  return (
    <>
      <div>
        <span>Name of the selected student is: {name}</span>
      </div>
      <div>
        <span>
          Age of {name} is {age}
        </span>
      </div>
    </>
  );
};

class Student extends Component {
  state = {
    students: [],
    details: {}
  };

  async componentDidMount() {
    const studentData = await Axios(
      "https://student-management-api-1u3cd4j7s.now.sh/students"
    );
    this.setState({ students: studentData.data });
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
          <DisplayDetails
            name={this.state.details.name}
            age={this.state.details.age}
          />
        )}
      </>
    );
  }
}

export default Student;
