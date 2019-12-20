import * as React from "react";
import "./Index.scss";
import { NextPage } from "next";
import Layout from "../components/shared/layout/Layout";
import appSettings from "../app-settings";
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
