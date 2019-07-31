const initialState = {
  studentList: [],
  selectedStudent: {}
};
export const Student = (state = initialState, action) => {
  switch (action.type) {
    case "STUDENTLIST":
      return {
        ...state,
        studentList: action.payload
      };

    default:
      return state;
  }
};
