import * as React from "react";
import { shallow } from "enzyme";
import Banner from "./Banner";

describe("<Banner />", () => {
  it("should render correctly", () => {
    const wrapper = shallow(<Banner imgSrc="" url="#" />);
    expect(wrapper).toMatchSnapshot();
  });
});
