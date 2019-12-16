import * as React from 'react';
import Header from './Header';
import { NextPage } from "next";
import { ReactNode } from 'react';

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
    </div>
  );

export default Layout;