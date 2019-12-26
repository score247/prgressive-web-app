import React from "react";
import { useRouter } from "next/router";
import { SportsEnum } from "../../common/enums/sportenum";
import Link from "next/link";

interface IProps {
  sport: string;
  href: string;
  activeClassName: string;
  htmlText: string;
  iconClassName: string;
}

const SportLink: React.FunctionComponent<IProps> = ({ sport, href, activeClassName, htmlText, iconClassName }: IProps) => {
  const { pathname } = useRouter();
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

export default SportLink;
