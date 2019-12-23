import React from "react";
import "./Navbar.scss";
import { createLink } from "./Navbar";
import { SportsEnum } from "../../../../../common/sportenum";

interface IProps {
  sport: string;
}

const detectIconClassName = (sport: string) => {
  return sport === SportsEnum.SOCCER ? "icon-soccer" : sport === SportsEnum.BASKETBALL ? "icon-basketball" : "icon-esports";
};

const NavbarMobile: React.FunctionComponent<IProps> = ({ sport }) => (
  <nav className="nav-menu-mobile">
    <ul className="menu">
      {createLink(`/${sport}`, "active", "menu-item", "Scores", detectIconClassName(sport))}
      {createLink(`/${sport}/favorites`, "active", "menu-item", "Favorites", "icon-favorites")}
      {createLink(`/${sport}/leagues`, "active", "menu-item", "Leagues", "icon-leagues")}
      {createLink(`/${sport}/news`, "active", "menu-item", "News", "icon-news")}
      {createLink(`/${sport}/tv`, "active", "menu-item", "TV", "icon-tv")}
    </ul>
  </nav>
);

export default NavbarMobile;
