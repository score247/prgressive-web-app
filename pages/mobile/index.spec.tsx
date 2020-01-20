import React from "react";
import { shallow } from "enzyme";
import MobilePage from "./index";

describe("MobilePage", () => {
  it("should render correctly", () => {
    const wrapper = shallow(<MobilePage />);
    expect(wrapper).toMatchSnapshot();
  });
});
