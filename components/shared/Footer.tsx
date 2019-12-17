import * as React from "react";
import Link from "next/link";

const linkStyle = {
  marginRight: 15
};

const Footer = () => (
  <div>
    <Link href="/">
      <a style={linkStyle}>Terms</a>
    </Link>
    <Link href="/soccer">
      <a style={linkStyle}>About Us</a>
    </Link>
  </div>
);

export default Footer;
