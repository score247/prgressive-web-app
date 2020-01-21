import React from "react";
import { shallow } from "enzyme";
import DisplayOptions from "./";
import { DisplayOptionsProps } from "./type";
import { DisplayMode } from "../../common/constants";

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

  it("should trigger onDisplayModeChange correctly", () => {
    const wrapper = shallow(<DisplayOptions {...props} />);
    const showAll = wrapper.find(".show-all");

    showAll.simulate("click");
    expect(props.onDisplayModeChange).toBeCalledTimes(1);
    expect(props.onDisplayModeChange).toBeCalledWith(DisplayMode.ShowAll);
  });

  it("should trigger onDisplayModeChange correctly", () => {
    const wrapper = shallow(<DisplayOptions {...props} />);
    const showAll = wrapper.find(".show-only");

    showAll.simulate("click");
    expect(props.onDisplayModeChange).toBeCalledTimes(1);
    expect(props.onDisplayModeChange).toBeCalledWith(DisplayMode.ShowOnly);
  });

  it("should trigger onDisplayModeChange correctly", () => {
    const wrapper = shallow(<DisplayOptions {...props} />);
    const showAll = wrapper.find(".hide");

    showAll.simulate("click");
    expect(props.onDisplayModeChange).toBeCalledTimes(1);
    expect(props.onDisplayModeChange).toBeCalledWith(DisplayMode.Hide);
  });
});
