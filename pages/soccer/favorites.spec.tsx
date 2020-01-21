import React from "react";
import { shallow } from "enzyme";
import FavoritesPage from "./favorites";

describe("FavoritesPage", () => {
  it("should render correctly", () => {
    const wrapper = shallow(<FavoritesPage />);
    expect(wrapper).toMatchSnapshot();
  });
});
