import React from 'react';
import NavLink from '../navLink';

const FunctionBar: React.FunctionComponent = () => (
  <nav>
    <ul className="function-sports">
      <li>
        <NavLink href="/soccer">Soccer</NavLink>
      </li>
      <li>
        <NavLink href="/basketball">Basketball</NavLink>
      </li>
      <li>
        <NavLink href="/esports">eSports</NavLink>
      </li>
    </ul>
    <ul className="function-other">
      <li>
        <NavLink href="/">My favorites</NavLink>
      </li>
      <li>
        <NavLink href="/">News</NavLink>
      </li>
      <li>
        <NavLink href="/">TV schedules</NavLink>
      </li>
      <li>
        <NavLink href="/">mobile</NavLink>
      </li>
      <li>
        <NavLink href="/">settings</NavLink>
      </li>
    </ul>
    <style jsx>{`
      nav {
        display: flex;
        flex-flow: row wrap;
        justify-content: space-between;
        width: 100%;
      }

      ul {
        padding-left: 0;
        margin: 0;
        border: 0;
        list-style: none;
        display: flex;
      }
    `}</style>
  </nav>
);

export default FunctionBar;
