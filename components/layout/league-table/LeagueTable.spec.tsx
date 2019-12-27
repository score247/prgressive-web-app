import * as React from "react";
import { shallow } from "enzyme";
import LeagueTable from "./LeagueTable";

describe("<LeagueTable />", () => {
  it("should render correctly", () => {
    const wrapper = shallow(<LeagueTable />);
    expect(wrapper).toMatchSnapshot();
  });
});
