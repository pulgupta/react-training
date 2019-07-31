import MyAnchor from "../MyAnchor";
// Because we are doing unit test we will just do a shallow which will not create the child components
import { shallow } from "enzyme";
import React from "react";

describe("Img Details", () => {
  it("should render without crashing", () => {
    shallow(<MyAnchor />);
  });

  it("anchor should have the correct text", () => {
    const wrapper = shallow(
      <MyAnchor href="https://reactjs.org" text="Learn React" />
    );
    const anchor = wrapper.find(".App-link"); // . css selector
    expect(anchor.text()).toBe("Learn React"); // Now check if are receiving the same prop
  });
});
