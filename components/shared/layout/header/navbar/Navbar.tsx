import React from 'react';
import './Navbar.scss';
import ActiveLink from '../../../../activeLink';

const Navbar = () => (
  <nav className="nav-menu hide-mobile">
    <div className="container">
      <div className="nav-sports">
        <ul className="menu">
          <ActiveLink href="/soccer" activeClassName="active" listItemClassName="menu-item">
            <a className="nav-link">
              <i className="icon-soccer" />
              Soccer
            </a>
          </ActiveLink>
          <ActiveLink href="/basketball" activeClassName="active" listItemClassName="menu-item">
            <a className="nav-link">
              <i className="icon-basketball" />
              Basketball
            </a>
          </ActiveLink>
          <ActiveLink href="/esports" activeClassName="active" listItemClassName="menu-item">
            <a className="nav-link">
              <i className="icon-esports" />
              eSports
            </a>
          </ActiveLink>
        </ul>
      </div>
      <div className="nav-function">
        <ul className="menu">
          <ActiveLink href="/favorites" activeClassName="active" listItemClassName="menu-item">
            <a className="nav-link">my favorites</a>
          </ActiveLink>
          <ActiveLink href="/news" activeClassName="active" listItemClassName="menu-item">
            <a className="nav-link">news</a>
          </ActiveLink>
          <ActiveLink href="/tv" activeClassName="active" listItemClassName="menu-item">
            <a className="nav-link">TV schedule</a>
          </ActiveLink>
          <ActiveLink href="/mobile" activeClassName="active" listItemClassName="menu-item">
            <a className="nav-link">mobile</a>
          </ActiveLink>
          <ActiveLink href="/settings" activeClassName="active" listItemClassName="menu-item">
            <a className="nav-link">settings</a>
          </ActiveLink>
        </ul>
      </div>
    </div>
  </nav>
);

export default Navbar;
