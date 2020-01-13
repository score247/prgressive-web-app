import React from "react";
import { shallow } from "enzyme";
import SearchBar from "./";
import { SearchBarProps } from "./type";

describe("SearchBar", () => {
  let props: SearchBarProps;

  beforeEach(() => {
    props = {
      filterText: "abc",
      onFilterTextChange: jest.fn()
    };
  });

  it("should render correctly", () => {
    const wrapper = shallow(<SearchBar {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
