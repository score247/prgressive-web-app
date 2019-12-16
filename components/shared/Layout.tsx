import * as React from 'react';
import { NextPage } from "next";
import { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';


type LayoutProps = {
    children: ReactNode
  };

const layoutStyle = {
    margin: 20,
    padding: 20,
    border: '1px solid #DDD'
  };
  
const Layout: NextPage<LayoutProps> = ({ children }: LayoutProps) => 
  (
    <div style={layoutStyle}>
      <Header />
      {children}
      <Footer />
    </div>
  );

export default Layout;