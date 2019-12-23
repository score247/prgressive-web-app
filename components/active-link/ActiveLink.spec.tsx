import React from "react";
import { shallow } from "enzyme";
import ActiveLink from "./index";

jest.mock("next/router", () => ({
  useRouter() {
    return {
      route: "/soccer",
      pathname: "/soccer",
      query: "",
      asPath: ""
    };
  }
}));

describe("ActiveLink", () => {
  const wrapper = shallow(
    <ActiveLink href="/soccer" activeClassName="active" listItemClassName="menu-item">
      <a className="nav-link">
        <i className="icon-soccer" />
        Soccer
      </a>
    </ActiveLink>
  );

  it("should render correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should active sport tab correctly", () => {
    expect(wrapper.find(".active").length).toEqual(1);
  });

  it("should not active sport tab correctly", () => {
    const notActiveWrapper = shallow(
      <ActiveLink href="/basketball" activeClassName="active" listItemClassName="menu-item">
        <a className="nav-link">
          <i className="icon-soccer" />
          Soccer
        </a>
      </ActiveLink>
    );
    expect(notActiveWrapper.find(".active").length).toEqual(0);
  });
});
