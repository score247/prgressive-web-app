import Link from 'next/link';
import React, { Children } from 'react';
import { withRouter } from 'next/router';
import { WithRouterProps } from 'next/dist/client/with-router';
import { ReactElementLike } from 'prop-types';

interface IProps extends WithRouterProps {
  href: string;
  children: ReactElementLike;
  activeClassName: string;
  listItemClassName: string;
}

const ActiveLink: React.FunctionComponent<IProps> = ({ router, children, href, activeClassName, listItemClassName, ...props }) => {
  const child = Children.only(children);
  const childClassName = child.props.className || '';

  const className = router.pathname === href ? `${listItemClassName} ${activeClassName}`.trim() : `${listItemClassName}`.trim();

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

export default withRouter(ActiveLink);
