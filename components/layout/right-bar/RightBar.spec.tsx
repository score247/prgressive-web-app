import * as React from "react";
import { shallow } from "enzyme";
import RightBar from "./RightBar";

describe("<RightBar />", () => {
  it("should render correctly", () => {
    const wrapper = shallow(<RightBar />);
    expect(wrapper).toMatchSnapshot();
  });
});
