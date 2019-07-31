export const SelectStudent = student => async dispatch => {
  dispatch({
    type: "SELECTEDSTUDENT",
    payload: student
  });
};
