import * as React from "react";
import Top from "./top/Top";
import Navbar from "./navbar/Navbar";
import NavbarMobile from "./navbar/NavbarMobile";

const Header = () => (
  <header>
    <Top />
    <Navbar />
    <NavbarMobile />
  </header>
);

export default Header;
