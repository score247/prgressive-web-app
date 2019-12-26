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
  const wrapper = shallow(<NavBarMobile sport={SportsEnum.SOCCER} />);

  it("should render correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
