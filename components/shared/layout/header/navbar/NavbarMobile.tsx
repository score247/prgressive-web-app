import React from 'react';
import './Navbar.scss';
import { createLink } from './Navbar';

const NavbarMobile = () => (
  <nav className="nav-menu-mobile">
    <ul className="menu">
      {createLink('/soccer', 'active', 'menu-item', 'Scores')}
      {createLink('/favorites', 'active', 'menu-item', 'Favorites')}
      {createLink('/leagues', 'active', 'menu-item', 'Leagues')}
      {createLink('/news', 'active', 'menu-item', 'News')}
      {createLink('/tv', 'active', 'menu-item', 'TV')}
    </ul>
  </nav>
);

export default NavbarMobile;
