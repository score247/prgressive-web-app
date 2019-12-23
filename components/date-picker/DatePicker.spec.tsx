import React from "react";
import { shallow } from "enzyme";
import DatePicker from "./index";
import { ReactDatePickerProps } from "react-datepicker";

describe("DatePicker", () => {
  it("DatePicker-render correctly", () => {
    const props: ReactDatePickerProps = {
      selected: new Date(),
      onChange: function(date: Date) {}
    };

    const wrapper = shallow(<DatePicker {...props} />);

    expect(wrapper).toMatchSnapshot();
  });
});
