import React from "react";
import { shallow } from "enzyme";
import NavBar from "./Navbar";

describe("NavBar", () => {
  const wrapper = shallow(<NavBar sport="soccer" />);

  it("should render correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
