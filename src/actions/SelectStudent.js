import { SELECTEDSTUDENT, MULTIPLESELECTED } from "../types";

export const SelectStudent = student => async dispatch => {
  dispatch({
    type: SELECTEDSTUDENT,
    payload: student
  });
};

export const SelectMultipleStudent = students => async dispatch => {
  console.log("action triggered witb", students);
  dispatch({
    type: MULTIPLESELECTED,
    payload: students
  });
};
