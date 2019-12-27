import * as React from "react";
import Layout from "../../components/layout";
import { LocalizedPage, withTranslation } from "../../common/helpers/Localizer";
import { ResourceType, ResourceKey } from "../../common/constants";

const LeaguesPage: LocalizedPage = ({ t }) => {
  const breadcrumbs = [t(ResourceKey.ESPORTS), t(ResourceKey.LEAGUES)];

  return (
    <Layout breadcrumbs={breadcrumbs}>
      <h1>E-Sports - Leagues</h1>
    </Layout>
  );
};

LeaguesPage.getInitialProps = async () => {
  return {
    namespacesRequired: [ResourceType.ESPORTS]
  };
};

export default withTranslation()(LeaguesPage);
