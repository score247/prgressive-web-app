import * as React from "react";
import { shallow } from "enzyme";
import TopEvents from "./index";

describe("<TopEvents />", () => {
  it("should render correctly", () => {
    const wrapper = shallow(<TopEvents />);
    expect(wrapper).toMatchSnapshot();
  });
});
