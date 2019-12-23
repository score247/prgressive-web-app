import * as React from "react";
import { NextPage } from "next";
import Layout from "../../components/shared/layout/Layout";
import { useTranslation, LocalizedPage } from "../../common/helpers/Localizer";

const LeaguesPage: LocalizedPage = () => {
  return (
    <Layout>
      <div>Leagues Page</div>
    </Layout>
  );
};

LeaguesPage.getInitialProps = async () => {
  return {
    namespacesRequired: ["esports"]
  };
};

export default LeaguesPage;
