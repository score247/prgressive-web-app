import React from "react";
import "./Navbar.scss";
import { WithTranslation } from "next-i18next";
import { withTranslation } from "../../../../common/helpers/Localizer";
import SportLink from "../../../common/sport-link";
import FunctionLink from "../../../common/function-link";
import { ResourceType, CommonResourceKey } from "../../../../common/resources";

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
            <SportLink
              sport={sport}
              href={"/"}
              activeClassName={activeClass}
              htmlText={t(CommonResourceKey.SOCCER)}
              iconClassName="icon-soccer"
            />
            <SportLink
              sport={sport}
              href={"/basketball"}
              activeClassName={activeClass}
              htmlText={t(CommonResourceKey.BASKETBALL)}
              iconClassName="icon-basketball"
            />
            <SportLink
              sport={sport}
              href={"/esports"}
              activeClassName={activeClass}
              htmlText={t(CommonResourceKey.E_SPORTS)}
              iconClassName="icon-esports"
            />
          </ul>
        </div>
        <div className="nav-function">
          <ul className="menu">
            <FunctionLink
              href={`/${sport}/leagues`}
              activeClassName={activeClass}
              htmlText={t(CommonResourceKey.LEAGUES)}
              iconClassName=""
            />
            <FunctionLink
              href={`/${sport}/favorites`}
              activeClassName={activeClass}
              htmlText={t(CommonResourceKey.MY_FAVORITES)}
              iconClassName=""
            />
            <FunctionLink
              href={`/${sport}/news`}
              activeClassName={activeClass}
              htmlText={t(CommonResourceKey.NEWS)}
              iconClassName=""
            />
            <FunctionLink
              href={`/${sport}/tv`}
              activeClassName={activeClass}
              htmlText={t(CommonResourceKey.TV_SCHEDULES)}
              iconClassName=""
            />
            <FunctionLink
              href={`/mobile`}
              activeClassName={activeClass}
              htmlText={t(CommonResourceKey.MOBILE)}
              iconClassName=""
            />
            <FunctionLink
              href={`/settings`}
              activeClassName={activeClass}
              htmlText={t(CommonResourceKey.SETTINGS)}
              iconClassName=""
            />
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default withTranslation(ResourceType.COMMON)(Navbar);
