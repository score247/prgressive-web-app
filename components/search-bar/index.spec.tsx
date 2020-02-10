import React from "react";
import { shallow } from "enzyme";
import SearchBar from ".";
import { SearchBarProps } from "./type";

describe("SearchBar", () => {
  let props: SearchBarProps;

  beforeEach(() => {
    props = {
      filterText: "abc",
      onFilterTextChange: jest.fn(),
      onSortChange: jest.fn(),
      sortByValue: 1
    };
  });

  it("should render correctly", () => {
    const wrapper = shallow(<SearchBar {...props} />);
    expect(wrapper).toMatchSnapshot();
  });

  it("should trigger onFilterTextChange when input change", () => {
    const wrapper = shallow(<SearchBar {...props} />);
    wrapper.find(".txt-search").simulate("change", { target: { value: "Test" } });
    expect(props.onFilterTextChange).toBeCalledTimes(1);
    expect(props.onFilterTextChange).toBeCalledWith("Test");
  });

  it("should trigger onSortChange when sort", () => {
    const wrapper = shallow(<SearchBar {...props} />);
    wrapper.find(".sort-dropdown").simulate("change", {
      value: 2,
      label: "Kick off time"
    });
    expect(props.onSortChange).toBeCalledTimes(1);
    expect(props.onSortChange).toBeCalledWith(2);
  });
});
