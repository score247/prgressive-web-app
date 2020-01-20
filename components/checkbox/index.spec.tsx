import React from "react";
import { shallow, ShallowWrapper } from "enzyme";
import Checkbox from "./";
import { CheckboxProps } from "./type";

describe("<Checkbox />", () => {
  let props: CheckboxProps;
  let wrapper: ShallowWrapper;

  beforeEach(() => {
    props = {
      id: "id",
      checked: false,
      value: "value",
      onChange: jest.fn()
    };
    wrapper = shallow(<Checkbox {...props} />);
  });

  it("should render correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should trigger onChange correctly", () => {
    const input = wrapper.find("input");
    input.simulate("change");
    expect(props.onChange).toBeCalled();
  });
});
