import {
  STUDENTLIST,
  SELECTEDSTUDENT,
  FILTEREDLIST,
  MULTIPLESELECTED
} from "../types";

const initialState = {
  studentList: [],
  selectedStudent: {},
  filteredList: [],
  multipleStudents: []
};
export const Student = (state = initialState, action) => {
  switch (action.type) {
    case STUDENTLIST:
      return {
        ...state,
        studentList: action.payload
      };
    case SELECTEDSTUDENT:
      return {
        ...state, // this means copy all the existing state of the redux store.
        selectedStudent: action.payload // Now just update single property of the store
      };
    case FILTEREDLIST:
      return {
        ...state,
        filteredList: action.payload
      };

    case MULTIPLESELECTED:
      return {
        ...state,
        multipleStudents: action.payload
      };
    default:
      return state;
  }
};
