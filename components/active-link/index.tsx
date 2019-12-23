import React, { Children } from "react";
import { useRouter } from "next/router";
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
  const className = `${listItemClassName} ${activeClassName}`.trim();

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
