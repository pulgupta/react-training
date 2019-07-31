export const SelectStudent = student => async dispatch => {
  console.log("The student which is being passed is ", student);
  dispatch({
    type: "SELECTEDSTUDENT",
    payload: student
  });
};
