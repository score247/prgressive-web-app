import * as React from "react";
import { ReactNode } from "react";
import Header from "./header";
import Footer from "./footer";

type LayoutProps = {
  children: ReactNode;
};

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: "1px solid #DDD"
};

const Layout = ({ children }: LayoutProps) => (
  <div style={layoutStyle}>
    <Header />
    {children}
    <Footer />
  </div>
);

export default Layout;
