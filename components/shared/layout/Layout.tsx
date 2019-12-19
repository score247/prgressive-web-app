import * as React from "react";
import { ReactNode } from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import { withTranslation } from "../../../common/helpers/Localizer";
import { WithTranslation } from "next-i18next";

type LayoutProps = {
  children: ReactNode;
};

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: "1px solid #DDD"
};

const Layout: React.FunctionComponent<LayoutProps & WithTranslation> = ({
  children
}) => (
  <div style={layoutStyle}>
    <Header />
    {children}
    <Footer />
  </div>
);

export default withTranslation()(Layout);
