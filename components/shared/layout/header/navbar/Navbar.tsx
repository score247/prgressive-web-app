import React from "react";
import "./Navbar.scss";
import ActiveLink from "../../../../activelink";
import { WithTranslation } from "next-i18next";
import { withTranslation } from "../../../../../common/helpers/Localizer";

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
  return (
    <nav className="nav-menu hide-mobile">
      <div className="container">
        <div className="nav-sports">
          <ul className="menu">
            {createLink("/soccer", "active", "menu-item", t("Soccer"), "icon-soccer")}
            {createLink("/basketball", "active", "menu-item", t("Basketball"), "icon-basketball")}
            {createLink("/esports", "active", "menu-item", t("esports"), "icon-esports")}
          </ul>
        </div>
        <div className="nav-function">
          <ul className="menu">
            {createLink(`/${sport}/leagues`, "active", "menu-item", t("leagues"), "")}
            {createLink(`/${sport}/favorites`, "active", "menu-item", t("my favorites"), "")}
            {createLink(`/${sport}/news`, "active", "menu-item", t("news"), "")}
            {createLink(`/${sport}/tv`, "active", "menu-item", t("TV schedule"), "")}
            {createLink(`/${sport}/mobile`, "active", "menu-item", t("mobile"), "")}
            {createLink("/settings", "active", "menu-item", t("settings"), "")}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default withTranslation("common")(Navbar);
