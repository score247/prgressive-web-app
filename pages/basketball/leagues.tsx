import * as React from "react";
import Layout from "../../components/layout";
import { LocalizedPage } from "../../common/helpers/Localizer";
import withLoadingPage from "../../hoc/with-loading-page";
import { CommonResourceKey, ResourceType } from "../../common/resources";

const LeaguesPage: LocalizedPage = ({ t }) => {
  const breadcrumbs = [t(CommonResourceKey.BASKETBALL), t(CommonResourceKey.LEAGUES)];

  return (
    <Layout breadcrumbs={breadcrumbs}>
      <h1>Basketball - Leagues</h1>
    </Layout>
  );
};

LeaguesPage.getInitialProps = async () => {
  return {
    namespacesRequired: [ResourceType.BASKETBALL]
  };
};

export default withLoadingPage(LeaguesPage);
