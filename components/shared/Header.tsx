import * as React from 'react';
import Link from 'next/link';

const linkStyle = {
    marginRight: 15
  };

const Header = () => (
    <div>
        <Link href="/index">
            <a style={linkStyle}>Home</a>
        </Link>
        <Link href="/soccer/soccer">
            <a style={linkStyle}>Soccer</a>
        </Link>
        <Link href="/basketball/basketball">
            <a style={linkStyle}>Basketball</a>
        </Link>
        <Link href="/esports/esports">
            <a style={linkStyle}>eSports</a>
        </Link>
  </div>
);

export default Header;