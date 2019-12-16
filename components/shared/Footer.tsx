import * as React from 'react';
import { NextPage } from "next";
import Link from 'next/link';

const linkStyle = {
    marginRight: 15
  };

const Footer: NextPage = () => (
    <div>
        <Link href="/index">
            <a style={linkStyle}>Terms</a>
        </Link>
        <Link href="/soccer/soccer">
            <a style={linkStyle}>About Us</a>
        </Link>
  </div>
);

export default Footer;