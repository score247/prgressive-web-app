import * as React from "react";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import "./layout.scss";

const Layout: React.FunctionComponent = ({ children }) => (
  <div className="App">
    <Header />
    <div className="container">{children}</div>
    <Footer />
  </div>
);

export default Layout;
