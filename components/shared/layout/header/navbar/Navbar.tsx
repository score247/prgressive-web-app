import React from "react";
import "./Navbar.scss";
import ActiveLink from "../../../../active-link";
import { WithTranslation } from "next-i18next";
import { withTranslation } from "../../../../../common/helpers/Localizer";
import { useRouter } from "next/router";
import { SportsEnum } from "../../../../../common/enums/sportenum";

export const createLink = (href: string, activeClassName: string, listItemClassName: string, htmlText: string, iconClassName: string) => (
  <ActiveLink href={href} activeClassName={activeClassName} listItemClassName={listItemClassName}>
    <a className="nav-link">
      <i className={iconClassName} />
      {htmlText}
    </a>
  </ActiveLink>
);

interface IProps extends WithTranslation {
  sport: string;
}

const Navbar: React.FunctionComponent<IProps> = ({ t, sport }: IProps) => {
  const { pathname } = useRouter();
  return (
    <nav className="nav-menu hide-mobile">
      <div className="container">
        <div className="nav-sports">
          <ul className="menu">
            {createLink(
              "/",
              pathname.replace("/", "") === SportsEnum.SOCCER.toLowerCase() || pathname.split("/")[1] === SportsEnum.SOCCER.toLowerCase()
                ? "active"
                : "deactive",
              "menu-item",
              t("Soccer"),
              "icon-soccer"
            )}
            {createLink(
              "/basketball",
              pathname.replace("/", "") === SportsEnum.BASKETBALL.toLowerCase() ||
                pathname.split("/")[1] === SportsEnum.BASKETBALL.toLowerCase()
                ? "active"
                : "deactive",
              "menu-item",
              t("Basketball"),
              "icon-basketball"
            )}
            {createLink(
              "/esports",
              pathname.replace("/", "") === SportsEnum.ESPORTS.toLowerCase() || pathname.split("/")[1] === SportsEnum.ESPORTS.toLowerCase()
                ? "active"
                : "deactive",
              "menu-item",
              t("esports"),
              "icon-esports"
            )}
          </ul>
        </div>
        <div className="nav-function">
          <ul className="menu">
            {createLink(`/${sport}/leagues`, pathname === `/${sport}/leagues` ? "active" : "deactive", "menu-item", t("leagues"), "")}
            {createLink(
              `/${sport}/favorites`,
              pathname === `/${sport}/favorites` ? "active" : "deactive",
              "menu-item",
              t("my favorites"),
              ""
            )}
            {createLink(`/${sport}/news`, pathname === `/${sport}/news` ? "active" : "deactive", "menu-item", t("news"), "")}
            {createLink(`/${sport}/tv`, pathname === `/${sport}/tv` ? "active" : "deactive", "menu-item", t("TV schedule"), "")}
            {createLink("/mobile", pathname === "/mobile" ? "active" : "deactive", "menu-item", t("mobile"), "")}
            {createLink("/settings", pathname === "/settings" ? "active" : "deactive", "menu-item", t("settings"), "")}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default withTranslation("common")(Navbar);
