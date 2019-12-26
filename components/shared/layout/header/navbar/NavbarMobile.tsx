import React from "react";
import "./Navbar.scss";
import { WithTranslation } from "next-i18next";
import { withTranslation } from "../../../../../common/helpers/Localizer";
import { SportsEnum } from "../../../../../common/enums/sportenum";
import FunctionLink from "../../../../function-link";
import { ResourceType } from "../../../../../common/constants";

interface IProps extends WithTranslation {
  sport: string;
}

const NavbarMobile: React.FunctionComponent<IProps> = ({ t, sport }: IProps) => {
  const detectIconClassName =
    sport === SportsEnum.SOCCER ? "icon-soccer" : sport === SportsEnum.BASKETBALL ? "icon-basketball" : "icon-esports";
  const activeClass = "active";

  return (
    <nav className="nav-menu-mobile">
      <ul className="menu">
        <FunctionLink
          href={sport === SportsEnum.SOCCER ? "/" : `/${sport}`}
          activeClassName={activeClass}
          htmlText="Scores"
          iconClassName={detectIconClassName}
        />
        <FunctionLink href={`/${sport}/favorites`} activeClassName={activeClass} htmlText="Favorites" iconClassName="icon-menu-favorites" />
        <FunctionLink href={`/${sport}/leagues`} activeClassName={activeClass} htmlText="Leagues" iconClassName="icon-menu-leagues" />
        <FunctionLink href={`/${sport}/news`} activeClassName={activeClass} htmlText="News" iconClassName="icon-menu-news" />
        <FunctionLink href={`/${sport}/tv`} activeClassName={activeClass} htmlText="TV" iconClassName="icon-menu-tv" />
      </ul>
    </nav>
  );
};

export default withTranslation(ResourceType.COMMON)(NavbarMobile);
