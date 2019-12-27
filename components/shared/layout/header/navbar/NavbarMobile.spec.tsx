import React, { FunctionComponent } from "react";
import { shallow } from "enzyme";
import NavBarMobile from "./NavbarMobile";
import { SportsEnum } from "../../../../../common/enums/sportenum";

jest.mock("react-i18next", () => ({
  // this mock makes sure any components using the translate HoC receive the t function as a prop
  withTranslation: () => (Component: FunctionComponent) => {
    Component.defaultProps = { ...Component.defaultProps, t: () => "" };
    return Component;
  }
}));

describe("NavBar", () => {
  it("should render correctly", () => {
    const wrapper = shallow(<NavBarMobile sport={SportsEnum.SOCCER} />);
    expect(wrapper).toMatchSnapshot();
  });

  it("should render correctly", () => {
    const wrapper = shallow(<NavBarMobile sport={SportsEnum.BASKETBALL} />);
    expect(wrapper).toMatchSnapshot();
  });

  it("should render correctly", () => {
    const wrapper = shallow(<NavBarMobile sport={SportsEnum.ESPORTS} />);
    expect(wrapper).toMatchSnapshot();
  });
});
