import React from "react";
import "./Navbar.scss";
import { createLink } from "./Navbar";
import { SportsEnum } from "../../../../../common/enums/sportenum";
import { useRouter } from "next/router";

interface IProps {
  sport: string;
}

const detectIconClassName = (sport: string) => {
  return sport === SportsEnum.SOCCER ? "icon-soccer" : sport === SportsEnum.BASKETBALL ? "icon-basketball" : "icon-esports";
};

const NavbarMobile: React.FunctionComponent<IProps> = ({ sport }) => {
  const { pathname } = useRouter();
  return (
    <nav className="nav-menu-mobile">
      <ul className="menu">
        {createLink(
          sport === SportsEnum.SOCCER ? "/" : `/${sport}`,
          pathname.split("/").length < 3 ? "active" : "deactive",
          "menu-item",
          "Scores",
          detectIconClassName(sport)
        )}
        {createLink(
          `/${sport}/favorites`,
          pathname === `/${sport}/favorites` ? "active" : "deactive",
          "menu-item",
          "Favorites",
          "icon-menu-favorites"
        )}
        {createLink(
          `/${sport}/leagues`,
          pathname === `/${sport}/leagues` ? "active" : "deactive",
          "menu-item",
          "Leagues",
          "icon-menu-leagues"
        )}
        {createLink(`/${sport}/news`, pathname === `/${sport}/news` ? "active" : "deactive", "menu-item", "News", "icon-menu-news")}
        {createLink(`/${sport}/tv`, pathname === `/${sport}/tv` ? "active" : "deactive", "menu-item", "TV", "icon-menu-tv")}
      </ul>
    </nav>
  );
};

export default NavbarMobile;
