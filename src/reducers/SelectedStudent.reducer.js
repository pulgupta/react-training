const initialState = {
  studentList: [],
  selectedStudent: {}
};
export const SelectedStudent = (state = initialState, action) => {
  switch (action.type) {
    case "SELECTEDSTUDENT":
      return {
        ...state,
        selectedStudent: action.payload
      };

    default:
      return state;
  }
};
