import React from "react";
import { shallow } from "enzyme";
import TVPage from "./tv";

describe("TVPage", () => {
  it("should render correctly", () => {
    const wrapper = shallow(<TVPage />);
    expect(wrapper).toMatchSnapshot();
  });
});
