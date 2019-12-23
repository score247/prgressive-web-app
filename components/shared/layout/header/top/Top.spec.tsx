import React from "react";
import { shallow } from "enzyme";
import Top from "./Top";

describe("<Top/>", () => {
  it("should render correctly", () => {
    const wrapper = shallow(<Top />);
    expect(wrapper).toMatchSnapshot();
  });
});
