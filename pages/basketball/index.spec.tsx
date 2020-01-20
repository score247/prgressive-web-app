import React from "react";
import { shallow } from "enzyme";
import Basketball from "./index";

describe("FavoritesPage", () => {
  it("should render correctly", () => {
    const wrapper = shallow(<Basketball />);
    expect(wrapper).toMatchSnapshot();
  });
});
