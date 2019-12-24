import React from "react";
import { shallow } from "enzyme";
import Top from "./Top";
import { SportsEnum } from "../../../../../common/enums/sportenum";

describe("<Top/>", () => {
  it("should render correctly", () => {
    const wrapper = shallow(<Top sport={SportsEnum.SOCCER} />);
    expect(wrapper).toMatchSnapshot();
  });
});
