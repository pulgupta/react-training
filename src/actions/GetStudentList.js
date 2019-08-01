import { STUDENTLIST } from "../types";
import { FILTEREDLIST } from "../types";

import axios from "axios";

export const GetStudentList = () => async dispatch => {
  const studentData = await axios(
    "https://student-management-api-1u3cd4j7s.now.sh/students"
  );
  console.log("CHECK THIS SHOULD NOT BE CALLED MULTIPLE TIMES");
  dispatch({
    type: STUDENTLIST,
    payload: studentData.data
  });
};

export const FilterStudentList = (studentList, filter) => dispatch => {
  const studentData = studentList.filter(
    student => student.name.indexOf(filter) !== -1
  );
  dispatch({
    type: FILTEREDLIST,
    payload: studentData
  });
};
