import React from "react";
import { shallow } from "enzyme";
import TitleRow from "./title-row";

describe("TitleRow", () => {
  it("should render correctly", () => {
    const wrapper = shallow(<TitleRow title="Title" className="latest-title" />);
    expect(wrapper).toMatchSnapshot();
  });
});
