import React from "react";
import { shallow } from "enzyme";
import CustomDateInput from "./custom-date-input";

describe("CustomDateInput", () => {
  const onClick = jest.fn();

  it("render correctly", () => {
    const props = {
      onClick: onClick
    };
    const wrapper = shallow(<CustomDateInput {...props} />);

    expect(wrapper).toMatchSnapshot();
  });

  it("should trigger onClick correctly", () => {
    const props = {
      onClick: onClick
    };
    const wrapper = shallow(<CustomDateInput {...props} />);

    wrapper.find("span").simulate("click");
    expect(props.onClick).toBeCalled();
  });
});
