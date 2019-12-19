import React from 'react';
import './Navbar.scss';
import ActiveLink from '../../../../activeLink';

const NavbarMobile = () => (
  <nav className="nav-menu-mobile">
    <ul className="menu">
      <ActiveLink href="/soccer" activeClassName="active" listItemClassName="menu-item">
        <a className="nav-link">
          <i className="icon-scores" />
          Scores
        </a>
      </ActiveLink>
      <ActiveLink href="/favorites" activeClassName="active" listItemClassName="menu-item">
        <a className="nav-link">
          <i className="icon-favorites" />
          Favorites
        </a>
      </ActiveLink>
      <ActiveLink href="/leagues" activeClassName="active" listItemClassName="menu-item">
        <a className="nav-link">
          <i className="icon-leagues" />
          Leagues
        </a>
      </ActiveLink>
      <ActiveLink href="/news" activeClassName="active" listItemClassName="menu-item">
        <a className="nav-link">
          <i className="icon-news" />
          News
        </a>
      </ActiveLink>
      <ActiveLink href="/tv" activeClassName="active" listItemClassName="menu-item">
        <a className="nav-link">
          <i className="icon-tv" />
          TV
        </a>
      </ActiveLink>
    </ul>
  </nav>
);

export default NavbarMobile;
