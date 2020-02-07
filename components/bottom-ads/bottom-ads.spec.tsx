import * as React from "react";
import { shallow } from "enzyme";
import BottomAds from ".";

describe("<BottomAds />", () => {
  it("should render correctly", () => {
    const wrapper = shallow(<BottomAds />);
    expect(wrapper).toMatchSnapshot();
  });
});
