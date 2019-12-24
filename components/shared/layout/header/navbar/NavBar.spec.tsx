import React, { FunctionComponent } from "react";
import { shallow } from "enzyme";
import NavBar from "./Navbar";
import { Link } from "../../../../../common/helpers/Localizer";
import { SportsEnum } from "../../../../../common/enums/sportenum";

jest.mock("react-i18next", () => ({
  // this mock makes sure any components using the translate HoC receive the t function as a prop
  withTranslation: () => (Component: FunctionComponent) => {
    Component.defaultProps = { ...Component.defaultProps, t: () => "" };
    return Component;
  }
}));

jest.mock("next/router", () => ({
  useRouter() {
    return {
      route: "/",
      pathname: "/",
      query: "",
      asPath: ""
    };
  }
}));

describe("NavBar", () => {
  const wrapper = shallow(<NavBar sport={SportsEnum.BASKETBALL} />);

  it("should render correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should highlight sport correctly", () => {
    expect(
      wrapper
        .find(".active")
        .find(Link)
        .find({ href: "/basketball" }).length
    ).toEqual(1);
  });

  it("should highlight Soccer correctly", () => {
    const wrapperWithSoccer = shallow(<NavBar sport={SportsEnum.SOCCER} />);
    expect(
      wrapperWithSoccer
        .find(".active")
        .find(Link)
        .find({ href: "/" }).length
    ).toEqual(1);
  });
});
