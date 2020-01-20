import React from "react";
import { shallow } from "enzyme";
import SettingPage from "./index";

describe("SettingPage", () => {
  it("should render correctly", () => {
    const wrapper = shallow(<SettingPage />);
    expect(wrapper).toMatchSnapshot();
  });
});
