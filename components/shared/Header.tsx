import { NextPage } from "next";
import Link from 'next/link';

const linkStyle = {
    marginRight: 15
  };

const Header: NextPage = () => (
    <div>
        <Link href="/">
            <a style={linkStyle}>Soccer</a>
        </Link>
        <Link href="/basketball">
            <a style={linkStyle}>Basketball</a>
        </Link>
        <Link href="/basketball">
            <a style={linkStyle}>eSports</a>
        </Link>
  </div>
);

export default Header;