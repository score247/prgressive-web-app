import React from 'react';
import './Navbar.scss';
import { createLink } from './Navbar';

interface IProps {
  sport: string;
}

const NavbarMobile: React.FunctionComponent<IProps> = ({ sport }) => (
  <nav className="nav-menu-mobile">
    <ul className="menu">
      {createLink(`/${sport}`, 'active', 'menu-item', 'Scores')}
      {createLink(`/${sport}/favorites`, 'active', 'menu-item', 'Favorites')}
      {createLink(`/${sport}/leagues`, 'active', 'menu-item', 'Leagues')}
      {createLink(`/${sport}/news`, 'active', 'menu-item', 'News')}
      {createLink(`/${sport}/tv`, 'active', 'menu-item', 'TV')}
    </ul>
  </nav>
);

export default NavbarMobile;
