import axios from "axios";

export const GetStudentList = () => async dispatch => {
  const studentData = await axios(
    "https://student-management-api-1u3cd4j7s.now.sh/students"
  );

  dispatch({
    type: "STUDENTLIST",
    payload: studentData.data
  });
};
