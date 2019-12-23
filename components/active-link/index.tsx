import React, { Children } from "react";
import { withRouter, useRouter } from "next/router";
import { WithRouterProps } from "next/dist/client/with-router";
import { ReactElementLike } from "prop-types";
import { SportsEnum } from "../../common/enums/sportenum";
import { Link } from "../../common/helpers/Localizer";

interface IProps {
  href: string;
  children: ReactElementLike;
  activeClassName: string;
  listItemClassName: string;
}

const ActiveLink: React.FunctionComponent<IProps> = ({ children, href, activeClassName, listItemClassName, ...props }) => {
  const child = Children.only(children);
  const childClassName = child.props.className || "";
  const { pathname } = useRouter();

  let className = "";
  if (pathname === href) {
    className = `${listItemClassName} ${activeClassName}`.trim();
  } else {
    const sport = pathname.split("/")[1];
    if (
      sport === href.replace("/", "") &&
      (sport === SportsEnum.BASKETBALL || sport === SportsEnum.ESPORTS || sport === SportsEnum.SOCCER)
    ) {
      className = `${listItemClassName} ${activeClassName}`.trim();
    } else {
      className = `${listItemClassName}`.trim();
    }
  }

  return (
    <li className={className}>
      <Link href={href} {...props}>
        {React.cloneElement(child, {
          className: childClassName || null
        })}
      </Link>
    </li>
  );
};

export default ActiveLink;
