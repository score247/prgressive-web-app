import * as React from "react";
import "./index.scss";
import Layout from "../components/shared/layout/Layout";
import { LocalizedPage, withTranslation } from "../common/helpers/Localizer";

const Index: LocalizedPage<{ userAgent: string }> = ({ userAgent }) => (
  <Layout>
    <div className="index-text">
      <span id="index">Index Page!</span>
      <p>Browser: {userAgent}</p>
    </div>
  </Layout>
);

Index.getInitialProps = async ({ req }) => {
  const userAgent = req ? req.headers["user-agent"] || "" : navigator.userAgent;

  return {
    userAgent,
    namespacesRequired: ["header", "footer", "common"]
  };
};

export default withTranslation()(Index);
