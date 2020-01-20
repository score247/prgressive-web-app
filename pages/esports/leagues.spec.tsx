import React from "react";
import { shallow } from "enzyme";
import LeaguesPage from "./leagues";

describe("LeaguesPage", () => {
  it("should render correctly", () => {
    const wrapper = shallow(<LeaguesPage />);
    expect(wrapper).toMatchSnapshot();
  });
});
