import React from "react";
import { shallow } from "enzyme";
import SportLink from "./index";
import { SportsEnum } from "../../common/enums/sportenum";
import Link from "next/link";

jest.mock("next/router", () => ({
  useRouter() {
    return {
      pathname: ""
    };
  }
}));

const useRouter = jest.spyOn(require("next/router"), "useRouter");

describe("SportLink", () => {
  afterEach(() => jest.resetAllMocks());

  it("should render correctly", () => {
    const wrapper = shallow(
      <SportLink sport={SportsEnum.SOCCER.toLowerCase()} href="/" activeClassName="active" htmlText="soccer" iconClassName="icon" />
    );
    useRouter.mockImplementationOnce(() => ({
      pathname: "/soccer/news"
    }));
    expect(wrapper).toMatchSnapshot();
  });

  it("should highlight sport correctly", () => {
    useRouter.mockImplementationOnce(() => ({
      pathname: "/esports"
    }));
    const eSportsWrapper = shallow(
      <SportLink
        sport={SportsEnum.ESPORTS.toLowerCase()}
        href="/esports"
        activeClassName="active"
        htmlText="esports"
        iconClassName="icon"
      />
    );
    expect(
      eSportsWrapper
        .find(".active")
        .find(Link)
        .find({ href: "/esports" }).length
    ).toEqual(1);
  });

  it("should highlight sport correctly", () => {
    useRouter.mockImplementationOnce(() => ({
      pathname: "/"
    }));
    const wrapper = shallow(
      <SportLink sport={SportsEnum.SOCCER.toLowerCase()} href="/" activeClassName="active" htmlText="esports" iconClassName="icon" />
    );
    expect(
      wrapper
        .find(".active")
        .find(Link)
        .find({ href: "/" }).length
    ).toEqual(1);
  });

  it("should not highlight sport correctly", () => {
    useRouter.mockImplementationOnce(() => ({
      pathname: "/"
    }));
    const wrapper = shallow(
      <SportLink
        sport={SportsEnum.BASKETBALL.toLowerCase()}
        href="/esports"
        activeClassName="active"
        htmlText="esports"
        iconClassName="icon"
      />
    );
    expect(
      wrapper
        .find(".active")
        .find(Link)
        .find({ href: "/" }).length
    ).toEqual(0);
  });
});
