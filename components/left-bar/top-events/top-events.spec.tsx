import * as React from "react";
import { shallow } from "enzyme";
import TopEvents from "./TopEvents";

describe("<TopEvents />", () => {
  it("should render correctly", () => {
    const wrapper = shallow(<TopEvents />);
    expect(wrapper).toMatchSnapshot();
  });
});
