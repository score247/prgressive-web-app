import * as React from "react";
import Layout from "../../components/layout";
import { LocalizedPage } from "../../common/helpers/Localizer";
import { ResourceType, ResourceKey } from "../../common/constants";
import withLoadingPage from "../../hoc/with-loading-page";

const LeaguesPage: LocalizedPage = ({ t }) => {
  const breadcrumbs = [t(ResourceKey.E_SPORTS), t(ResourceKey.LEAGUES)];

  return (
    <Layout breadcrumbs={breadcrumbs}>
      <h1>E-Sports - Leagues</h1>
    </Layout>
  );
};

LeaguesPage.getInitialProps = async () => {
  return {
    namespacesRequired: [ResourceType.E_SPORTS]
  };
};

export default withLoadingPage(LeaguesPage);
