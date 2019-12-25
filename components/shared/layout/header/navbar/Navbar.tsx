import React from "react";
import "./Navbar.scss";
import { WithTranslation } from "next-i18next";
import { withTranslation, Link } from "../../../../../common/helpers/Localizer";
import { useRouter } from "next/router";
import { SportsEnum } from "../../../../../common/enums/sportenum";

interface IProps extends WithTranslation {
  sport: string;
}

const Navbar: React.FunctionComponent<IProps> = ({ t, sport }: IProps) => {
  const { pathname } = useRouter();

  const createSportLink = (href: string, activeClassName: string, htmlText: string, iconClassName: string) => {
    let className = "";
    if (sport === SportsEnum.SOCCER && href === "/") {
      if (pathname === "/" || pathname.search(SportsEnum.SOCCER) >= 1) {
        className = `menu-item ${activeClassName}`.trim();
      } else {
        className = `menu-item`;
      }
    } else if (href.replace("/", "") === sport) {
      className = `menu-item ${activeClassName}`.trim();
    } else {
      className = `menu-item`;
    }
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

  const createFunctionLink = (href: string, activeClassName: string, htmlText: string) => {
    const className = href === pathname ? `menu-item ${activeClassName}`.trim() : "menu-item";
    return (
      <li className={className}>
        <Link href={href}>
          <a className="nav-link">{htmlText}</a>
        </Link>
      </li>
    );
  };
  return (
    <nav className="nav-menu hide-mobile">
      <div className="container">
        <div className="nav-sports">
          <ul className="menu">
            {createSportLink("/", "active", t("soccer"), "icon-soccer")}
            {createSportLink("/basketball", "active", t("basketball"), "icon-basketball")}
            {createSportLink("/esports", "active", t("esports"), "icon-esports")}
          </ul>
        </div>
        <div className="nav-function">
          <ul className="menu">
            {createFunctionLink(`/${sport}/leagues`, "active", t("leagues"))}
            {createFunctionLink(`/${sport}/favorites`, "active", t("myfavorites"))}
            {createFunctionLink(`/${sport}/news`, "active", t("news"))}
            {createFunctionLink(`/${sport}/tv`, "active", t("tvschedules"))}
            {createFunctionLink(`/mobile`, "active", t("mobile"))}
            {createFunctionLink(`/settings`, "active", t("settings"))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default withTranslation("common")(Navbar);
