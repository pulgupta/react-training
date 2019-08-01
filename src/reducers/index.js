import { combineReducers } from "redux";
import { Student } from "./Student.reducer";
import { SelectedStudent } from "./SelectedStudent.reducer";

export default combineReducers({
  Student,
  SelectedStudent
});
