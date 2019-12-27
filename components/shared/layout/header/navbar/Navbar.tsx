import React from "react";
import "./Navbar.scss";
import { WithTranslation } from "next-i18next";
import { withTranslation } from "../../../../../common/helpers/Localizer";
import { ResourceType, ResourceKey } from "../../../../../common/constants";
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
            <SportLink sport={sport} href={"/"} activeClassName={activeClass} htmlText={t(ResourceKey.SOCCER)} iconClassName="icon-soccer" />
            <SportLink
              sport={sport}
              href={"/basketball"}
              activeClassName={activeClass}
              htmlText={t(ResourceKey.BASKETBALL)}
              iconClassName="icon-basketball"
            />
            <SportLink sport={sport} href={"/esports"} activeClassName={activeClass} htmlText={t(ResourceKey.ESPORTS)} iconClassName="icon-esports" />
          </ul>
        </div>
        <div className="nav-function">
          <ul className="menu">
            <FunctionLink href={`/${sport}/leagues`} activeClassName={activeClass} htmlText={t(ResourceKey.LEAGUES)} iconClassName="" />
            <FunctionLink href={`/${sport}/favorites`} activeClassName={activeClass} htmlText={t(ResourceKey.MYFAVORITES)} iconClassName="" />
            <FunctionLink href={`/${sport}/news`} activeClassName={activeClass} htmlText={t(ResourceKey.NEWS)} iconClassName="" />
            <FunctionLink href={`/${sport}/tv`} activeClassName={activeClass} htmlText={t(ResourceKey.TVSCHEDULES)} iconClassName="" />
            <FunctionLink href={`/mobile`} activeClassName={activeClass} htmlText={t(ResourceKey.MOBILE)} iconClassName="" />
            <FunctionLink href={`/settings`} activeClassName={activeClass} htmlText={t(ResourceKey.SETTINGS)} iconClassName="" />
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default withTranslation(ResourceType.COMMON)(Navbar);
