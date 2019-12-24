import React from "react";
import { shallow } from "enzyme";
import Top from "./Top";
import { SportsEnum } from "../../../../../common/enums/sportenum";
import Select from "react-select";
import Router from "next/router";

jest.mock("next/router", () => ({ push: jest.fn() }));

describe("<Top/>", () => {
  const wrapper = shallow(<Top sport={SportsEnum.SOCCER} />);

  it("should render correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should redirect when select sport in dropdown", () => {
    wrapper.find(Select).simulate("change", {
      value: "/basketball",
      label: SportsEnum.BASKETBALL.toUpperCase()
    });
    expect(Router.push).toHaveBeenCalledWith("/basketball");
  });
});
