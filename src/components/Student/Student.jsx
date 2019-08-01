import React, { Component } from "react";
import "./Student.css";
import StudentDetails from "../StudentDetails";
import { connect } from "react-redux";
import { GetStudentList } from "../../actions/GetStudentList";
import { SelectStudent } from "../../actions/SelectStudent";

class Student extends Component {
  state = {
    students: [],
    details: {}
  };

  componentDidMount() {
    // Checking if we have data in the redux
    if (this.props.students.length === 0) {
      console.log("So the list of students are still not set");
      this.props.GetStudentList();
    }

    // new Axios("https://student-management-api-1u3cd4j7s.now.sh/students").then(
    //   data => this.setState({ students: data.data })
    // );
    // const studentData = await Axios(
    //   "https://student-management-api-1u3cd4j7s.now.sh/students"
    // );
    // this.setState({ students: studentData.data });
  }

  showDetails = index => {
    this.props.SelectStudent(this.props.students[index]);
    this.props.history.push("/studentdetails");
  };

  render() {
    return (
      <div>
        <br />
        <a className="btn btn-danger" href="/">
          Homepage
        </a>
        <br />
        <br />
        {this.props.students.map((student, index) => (
          <span
            className="student btn btn-primary pointer"
            onClick={() => this.showDetails(index)}
            key={index}
          >
            <span>
              <strong>Name: </strong> {student.name}
            </span>
            <br />
            <span>
              <strong>Roll Number: </strong>
              {student.rollNumber}
            </span>
          </span>
        ))}
        {Object.keys(this.state.details).length !== 0 && <StudentDetails />}
      </div>
    );
  }
}

// MapDispatchToProps ensure that we have the action as a prop function so that we can refer to that action
// from the prop property
const mapDispatchToProps = {
  GetStudentList,
  SelectStudent
};

const mapStoreToProps = store => {
  return {
    // Studnet is coming from combine Reducer
    students: store.Student.studentList
  };
};

export default connect(
  mapStoreToProps,
  mapDispatchToProps
)(Student);
