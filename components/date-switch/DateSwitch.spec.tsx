import React from "react";
import { shallow } from "enzyme";
import {  Props } from "./type";
import DateSwitch from "./index";

jest.mock("../../common/helpers/Localizer", () =>
  jest.requireActual("../../common/helpers/__mocks__/Localizer")
);

describe("DateBar", () => {
  let props: Props;

  beforeEach(() => {

    props = {
      onClick: jest.fn(),
      currentDate: new Date()
    };
  });

  it("render correctly", () => {
    const wrapper = shallow(<DateSwitch {...props} />);
    expect(wrapper).toMatchSnapshot();
  });

  it("should call onClick when clicking on button", () => {
    const wrapper = shallow(<DateSwitch {...props} />);
    wrapper.find("button").at(0).simulate("click");
    expect(props.onClick).toBeCalled();
  });
});
