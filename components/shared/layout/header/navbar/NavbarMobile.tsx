import React from "react";
import "./Navbar.scss";
import { WithTranslation } from "next-i18next";
import { withTranslation, Link } from "../../../../../common/helpers/Localizer";
import { SportsEnum } from "../../../../../common/enums/sportenum";
import { useRouter } from "next/router";

interface IProps extends WithTranslation {
  sport: string;
}

const NavbarMobile: React.FunctionComponent<IProps> = ({ t, sport }: IProps) => {
  const { pathname } = useRouter();

  const detectIconClassName =
    sport === SportsEnum.SOCCER ? "icon-soccer" : sport === SportsEnum.BASKETBALL ? "icon-basketball" : "icon-esports";

  const createFunctionLink = (href: string, activeClassName: string, htmlText: string, iconClassName: string) => {
    const className = href === pathname ? `menu-item ${activeClassName}`.trim() : "menu-item";
    return (
      <li className={className}>
        <Link href={href}>
          <a className="nav-link">
            <i className={iconClassName} />
            {htmlText}
          </a>
        </Link>
      </li>
    );
  };

  return (
    <nav className="nav-menu-mobile">
      <ul className="menu">
        {createFunctionLink(sport === SportsEnum.SOCCER ? "/" : `/${sport}`, "active", "Scores", detectIconClassName)}
        {createFunctionLink(`/${sport}/favorites`, "active", "Favorites", "icon-menu-favorites")}
        {createFunctionLink(`/${sport}/leagues`, "active", "Leagues", "icon-menu-leagues")}
        {createFunctionLink(`/${sport}/news`, "active", "News", "icon-menu-news")}
        {createFunctionLink(`/${sport}/tv`, "active", "TV", "icon-menu-tv")}
      </ul>
    </nav>
  );
};

export default withTranslation("common")(NavbarMobile);
