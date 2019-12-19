import * as React from "react";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import "./Layout.scss";

const Layout: React.FunctionComponent = ({ children }) => (
  <div>
    <Header />
    <div className="container">{children}</div>
    <Footer />
  </div>
);

export default Layout;
