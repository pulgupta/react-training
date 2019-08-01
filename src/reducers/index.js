import { combineReducers } from "redux";
import { Student } from "./Student.reducer";
import { SelectedStudent } from "./SelectedStudent.reducer";

// Putting all the reducers together so that we can refer all the reducers in a single import while
// creating redux provider
export default combineReducers({
  Student,
  SelectedStudent
});
