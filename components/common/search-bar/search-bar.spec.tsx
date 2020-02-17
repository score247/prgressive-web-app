import React from "react";
import { shallow } from "enzyme";
import SearchBar from ".";
import { SearchBarProps } from "./type";
import SearchBox from './search-box';

describe("SearchBar", () => {
  let props: SearchBarProps;

  beforeEach(() => {
    props = {
      filterText: "abc",
      onFilterTextChange: jest.fn(),
      onReset: jest.fn(),
      placeHolder: "Search"
    };
  });

  it("should render correctly", () => {
    const wrapper = shallow(<SearchBar {...props} />);
    expect(wrapper).toMatchSnapshot();
  });

  it("should trigger onFilterTextChange when input change", () => {
    const wrapper = shallow(<SearchBox {...props} />);
    wrapper.find(".txt-search").simulate("change", { target: { value: "Test" } });
    expect(props.onFilterTextChange).toBeCalledTimes(1);
    expect(props.onFilterTextChange).toBeCalledWith("Test");
  });

  it("should trigger onReset when click clear text", () => {
    const wrapper = shallow(<SearchBox {...props} />);
    wrapper.find(".icon-close").simulate("click");
    expect(props.onReset).toBeCalledTimes(1);
  });
});
