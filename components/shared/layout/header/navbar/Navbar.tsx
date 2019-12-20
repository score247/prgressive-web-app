import React from 'react';
import './Navbar.scss';
import ActiveLink from '../../../../activeLink';

export const createLink = (href: string, activeClassName: string, listItemClassName: string, htmlText: string) => (
  <ActiveLink href={href} activeClassName={activeClassName} listItemClassName={listItemClassName}>
    <a className="nav-link">
      <i className="icon-soccer" />
      {htmlText}
    </a>
  </ActiveLink>
);
const Navbar = () => (
  <nav className="nav-menu hide-mobile">
    <div className="container">
      <div className="nav-sports">
        <ul className="menu">
          {createLink('/soccer', 'active', 'menu-item', 'Soccer')}
          {createLink('/basketball', 'active', 'menu-item', 'Basketball')}
          {createLink('/esports', 'active', 'menu-item', 'eSports')}
        </ul>
      </div>
      <div className="nav-function">
        <ul className="menu">
          {createLink('/favorites', 'active', 'menu-item', 'my favorites')}
          {createLink('/news', 'active', 'menu-item', 'news')}
          {createLink('/tv', 'active', 'menu-item', 'TV schedule')}
          {createLink('/mobile', 'active', 'menu-item', 'mobile')}
          {createLink('/settings', 'active', 'menu-item', 'settings')}
        </ul>
      </div>
    </div>
  </nav>
);

export default Navbar;
