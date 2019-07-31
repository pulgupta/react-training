import Student from "../Student/Student";
// Because we are doing unit test, we will just do a shallow which will not create any child components
import { shallow } from "enzyme";
import React from "react";

describe("Student Details", () => {
  it("should render without crashing", () => {
    shallow(<Student />);
  });

  it("should render with states", () => {
    const wrapper = shallow(<Student />);
    expect(wrapper.state().students.length).toBe(0);
  });
});
