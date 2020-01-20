import React from "react";
import { shallow } from "enzyme";
import SoccerPage from "./index";

describe("SoccerPage", () => {
  it("should render correctly", () => {
    const wrapper = shallow(<SoccerPage />);
    expect(wrapper).toMatchSnapshot();
  });
});
