import React from "react";
import { shallow } from "enzyme";
import FunctionLink from "./index";
import Link from "next/link";

jest.mock("next/router", () => ({
  useRouter() {
    return {
      pathname: "/soccer/news"
    };
  }
}));

describe("FunctionLink", () => {
  it("should render correctly", () => {
    const wrapper = shallow(<FunctionLink href="/soccer/news" activeClassName="active" htmlText="soccer" iconClassName="icon" />);
    expect(wrapper).toMatchSnapshot();
  });

  it("should not highlight tab correctly", () => {
    const wrapper = shallow(<FunctionLink href="/soccer/tv" activeClassName="active" htmlText="soccer" iconClassName="icon" />);
    expect(
      wrapper
        .find(".active")
        .find(Link)
        .find({ href: "/soccer/tv" }).length
    ).toEqual(0);
  });
});
