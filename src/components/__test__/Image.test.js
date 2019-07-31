import MyImg from "../MyImg";
// Because we are doing unit test, we will just do a shallow which will not create any child components
import { shallow } from "enzyme";
import React from "react";

describe("Img Details", () => {
  it("should render without crashing", () => {
    shallow(<MyImg alt="asda" />);
  });

  it("should have alt property", () => {
    const wrapper = shallow(<MyImg alt={"text"} className={"App-logo"} />);
    const img = wrapper.find(".App-logo"); // . css selector
    expect(img.props().alt).toBe("hello-text"); // Now check if are receiving the same prop
  });

  it("should have the correct source", () => {
    const wrapper = shallow(<MyImg alt={"text"} className={"App-logo"} />);
    const img = wrapper.find(".App-logo");
  });
});
