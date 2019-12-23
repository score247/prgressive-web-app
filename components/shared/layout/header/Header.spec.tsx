import * as React from "react";
import { shallow } from "enzyme";
import Header from "./Header";

describe("<Header/>", () => {
  it("should render correctly", () => {
    const wrapper = shallow(<Header />);
    expect(wrapper).toMatchSnapshot();
  });
});
