import React from "react";
import "./Navbar.scss";
import { WithTranslation } from "next-i18next";
import { withTranslation } from "../../../../../common/helpers/Localizer";
import { ResourceType } from "../../../../../common/constants";
import SportLink from "../../../../sport-link";
import FunctionLink from "../../../../function-link";

interface IProps extends WithTranslation {
  sport: string;
}

const Navbar: React.FunctionComponent<IProps> = ({ t, sport }: IProps) => {
  const activeClass = "active";

  return (
    <nav className="nav-menu hide-mobile">
      <div className="container">
        <div className="nav-sports">
          <ul className="menu">
            <SportLink sport={sport} href={"/"} activeClassName={activeClass} htmlText={t("soccer")} iconClassName="icon-soccer" />
            <SportLink
              sport={sport}
              href={"/basketball"}
              activeClassName={activeClass}
              htmlText={t("basketball")}
              iconClassName="icon-basketball"
            />
            <SportLink sport={sport} href={"/esports"} activeClassName={activeClass} htmlText={t("esports")} iconClassName="icon-esports" />
          </ul>
        </div>
        <div className="nav-function">
          <ul className="menu">
            <FunctionLink href={`/${sport}/leagues`} activeClassName={activeClass} htmlText={t("leagues")} iconClassName="" />
            <FunctionLink href={`/${sport}/favorites`} activeClassName={activeClass} htmlText={t("myfavorites")} iconClassName="" />
            <FunctionLink href={`/${sport}/news`} activeClassName={activeClass} htmlText={t("news")} iconClassName="" />
            <FunctionLink href={`/${sport}/tv`} activeClassName={activeClass} htmlText={t("tvschedules")} iconClassName="" />
            <FunctionLink href={`/mobile`} activeClassName={activeClass} htmlText={t("mobile")} iconClassName="" />
            <FunctionLink href={`/settings`} activeClassName={activeClass} htmlText={t("settings")} iconClassName="" />
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default withTranslation(ResourceType.COMMON)(Navbar);
