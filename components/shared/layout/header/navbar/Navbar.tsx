import React from "react";
import Link from "next/link";
import "./Navbar.scss";

const Navbar = () => (
  <nav className="nav-menu">
    <div className="container">
      <div className="nav-sports">
        <ul className="menu">
          <li className="menu-item">
            <Link href="/soccer">
              <a>
                <i className="icon-soccer" /> Soccer
              </a>
            </Link>
          </li>
          <li className="menu-item">
            <Link href="/basketball">
              <a>
                <i className="icon-basketball" /> Basketball
              </a>
            </Link>
          </li>
          <li className="menu-item">
            <Link href="/esports">
              <a>
                <i className="icon-esports" /> eSports
              </a>
            </Link>
          </li>
        </ul>
      </div>
      <div className="nav-function">
        <ul className="menu">
          <li className="menu-item">My favorites</li>
          <li className="menu-item">News</li>
          <li className="menu-item">TV schedules</li>
          <li className="menu-item">Mobile</li>
          <li className="menu-item">Settings</li>
        </ul>
      </div>
    </div>
  </nav>
);

export default Navbar;
