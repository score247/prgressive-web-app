import * as React from "react";
import Layout from "../../components/layout";
import { LocalizedPage } from "../../common/helpers/Localizer";
import { ResourceType, ResourceKey } from "../../common/constants";
import withLoadingPage from "../../hoc/with-loading-page";

const LeaguesPage: LocalizedPage = ({ t }) => {
  const breadcrumbs = [t(ResourceKey.SOCCER), t(ResourceKey.LEAGUES)];

  return (
    <Layout breadcrumbs={breadcrumbs}>
      <h1>Soccer - Leagues</h1>
    </Layout>
  );
};

LeaguesPage.getInitialProps = async () => {
  return {
    namespacesRequired: [ResourceType.SOCCER]
  };
};

export default withLoadingPage(LeaguesPage);
