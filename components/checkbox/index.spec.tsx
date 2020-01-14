import React from "react";
import { shallow } from "enzyme";
import Checkbox from "./";
import { CheckboxProps } from "./type";

describe("<Checkbox />", () => {
  let props: CheckboxProps;

  beforeEach(() => {
    props = {
      id: "id",
      checked: false,
      value: "value",
      onChange: jest.fn()
    };
  });
  const wrapper = shallow(<Checkbox {...props} />);

  it("should render correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
