import React from "react";
import "./Navbar.scss";
import ActiveLink from "../../../../activeLink";
import { WithTranslation } from "next-i18next";
import { withTranslation } from "../../../../../common/helpers/Localizer";

export const createLink = (
  href: string,
  activeClassName: string,
  listItemClassName: string,
  htmlText: string
) => (
  <ActiveLink
    href={href}
    activeClassName={activeClassName}
    listItemClassName={listItemClassName}
  >
    <a className="nav-link">
      <i className="icon-soccer" />
      {htmlText}
    </a>
  </ActiveLink>
);
const Navbar: React.FunctionComponent<WithTranslation> = ({t}: WithTranslation) => (
  <nav className="nav-menu hide-mobile">
    <div className="container">
      <div className="nav-sports">
        <ul className="menu">
          {createLink("/soccer", "active", "menu-item", t("soccer"))}
          {createLink("/basketball", "active", "menu-item", t("basketball"))}
          {createLink("/esports", "active", "menu-item", t("esports"))}
        </ul>
      </div>
      <div className="nav-function">
        <ul className="menu">
          {createLink("/favorites", "active", "menu-item", "my favorites")}
          {createLink("/news", "active", "menu-item", "news")}
          {createLink("/tv", "active", "menu-item", "TV schedule")}
          {createLink("/mobile", "active", "menu-item", "mobile")}
          {createLink("/settings", "active", "menu-item", "settings")}
        </ul>
      </div>
    </div>
  </nav>
);

export default withTranslation("common")(Navbar);
