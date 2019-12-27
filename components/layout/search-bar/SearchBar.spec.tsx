import * as React from "react";
import { shallow } from "enzyme";
import SearchBar from "./SearchBar";

describe("<SearchBar />", () => {
  it("should render correctly", () => {
    const wrapper = shallow(<SearchBar />);
    expect(wrapper).toMatchSnapshot();
  });
});
