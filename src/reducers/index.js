import { combineReducers } from "redux";
import { Student } from "./student.reducer";
import { SelectedStudent } from "./SelectedStudent.reducer";

export default combineReducers({
  Student,
  SelectedStudent
});
