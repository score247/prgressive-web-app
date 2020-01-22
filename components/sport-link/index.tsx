import React from "react";
import { useRouter } from "next/router";
import { SportsEnum } from "../../common/enums/sport-enum";
import Link from "next/link";

interface IProps {
  sport: string;
  href: string;
  activeClassName: string;
  htmlText: string;
  iconClassName: string;
}

const detectClassName = (sport: string, href: string, pathname: string, activeClassName: string) => {
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
  return className;
};

const SportLink: React.FunctionComponent<IProps> = (props: IProps) => {
  const { pathname } = useRouter();
  const { sport, href, activeClassName, htmlText, iconClassName } = props;
  return (
    <li className={detectClassName(sport, href, pathname, activeClassName)}>
      <Link href={href}>
        <a className="nav-link">
          <i className={iconClassName} />
          {htmlText}
        </a>
      </Link>
    </li>
  );
};

export default SportLink;
