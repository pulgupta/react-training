import React, { Component } from "react";
import "./Student.css";
import StudentDetails from "../StudentDetails";
import { connect } from "react-redux";
import {
  GetStudentList,
  FilterStudentList
} from "../../actions/GetStudentList";
import {
  SelectStudent,
  SelectMultipleStudent
} from "../../actions/SelectStudent";
import { MyRadio } from "../MyRadio";

class Student extends Component {
  state = {
    students: [],
    details: {},
    filter: "",
    seachSwitch: true,
    selectedStudents: []
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

  handleChange = e => {
    // This is async so we will need to use call back
    this.setState({ filter: e.target.value }, () => {
      if (this.state.filter.length >= 3 && this.state.seachSwitch) {
        this.props.FilterStudentList(this.props.students, this.state.filter);
      }
    });
  };

  filterControl = value => {
    console.log("this is parent ", value);
    if (value === "YES") this.setState({ seachSwitch: true });
    else this.setState({ seachSwitch: false });
  };

  addSelectedStudent = student => {
    console.log("Added student ", student);
    let stud = this.state.selectedStudents;
    stud.push(student);
    this.setState({ selectedStudents: stud });
    console.log(stud);
  };

  handleShowMultipleDetails = () => {
    debugger;
    this.props.SelectMultipleStudent(this.state.selectedStudents);
    this.props.history.push("/details");
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
        <span
          className="pointer btn btn-danger"
          onClick={this.handleShowMultipleDetails}
        >
          Show Multiple Details
        </span>
        <br />
        <br /> <strong>Filter: </strong>
        <input
          type="text"
          onChange={this.handleChange}
          value={this.state.filter}
        />
        <br />
        <br />
        <MyRadio
          list={["YES", "NO"]}
          onClick={value => this.filterControl(value)}
        />
        <br />
        <br />
        {this.props.students.map((student, index) => (
          <React.Fragment key={index}>
            <span
              className="student btn btn-secondary pointer"
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
            <input
              type="checkbox"
              name="student"
              value="selected"
              onClick={() => this.addSelectedStudent(student)}
            />
          </React.Fragment>
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
  SelectStudent,
  FilterStudentList,
  SelectMultipleStudent
};

const mapStoreToProps = store => {
  return {
    // Studnet is coming from combine Reducer
    students:
      store.Student.filteredList.length !== 0
        ? store.Student.filteredList
        : store.Student.studentList
  };
};

export default connect(
  mapStoreToProps,
  mapDispatchToProps
)(Student);
