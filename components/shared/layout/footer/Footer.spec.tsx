import * as React from "react";
import { shallow } from "enzyme";
import Footer from "./Footer";

describe("<Footer/>", () => {
  it("Should render correctly", () => {
    const wrapper = shallow(<Footer />);

    expect(wrapper).toMatchSnapshot();
  });
});
