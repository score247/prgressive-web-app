import React from "react";
import { render } from "enzyme";
import NavBar from "./Navbar";

describe("NavBar", () => {
  const wrapper = render(<NavBar sport="soccer" />);

  it("should render correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
