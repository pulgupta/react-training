import MyAnchor from "../MyAnchor";
// Because we are doing unit test we will just do a shallow which will not create the child components
import { shallow } from "enzyme";
import React from "react";

describe("Img Details", () => {
  it("should render without crashing", () => {
    shallow(<MyAnchor />);
  });
});
