import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";

interface IProps {
  href: string;
  activeClassName: string;
  htmlText: string;
  iconClassName: string;
}

const FunctionLink: React.FunctionComponent<IProps> = (props: IProps) => {
  const { pathname } = useRouter();
  const { href, activeClassName, htmlText, iconClassName } = props;
  const className = href === pathname ? `menu-item ${activeClassName}`.trim() : "menu-item";
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

export default FunctionLink;
