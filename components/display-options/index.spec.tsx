import React from "react";
import { shallow } from "enzyme";
import DisplayOptions from "./";
import { DisplayOptionsProps } from "./type";

describe("DisplayOptions", () => {
  let props: DisplayOptionsProps;

  beforeEach(() => {
    props = {
      onDisplayModeChange: jest.fn()
    };
  });

  it("should render correctly", () => {
    const wrapper = shallow(<DisplayOptions {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
