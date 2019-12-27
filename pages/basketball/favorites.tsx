import * as React from "react";
import Layout from "../../components/layout";
import { LocalizedPage, withTranslation } from "../../common/helpers/Localizer";
import { ResourceKey, ResourceType } from "../../common/constants";

const FavoritesPage: LocalizedPage = ({ t }) => {
  const breadcrumbs = [t(ResourceKey.BASKETBALL), t(ResourceKey.FAVORITES)];

  return (
    <Layout breadcrumbs={breadcrumbs}>
      <h1>basketball - Favorites</h1>
    </Layout>
  );
};

FavoritesPage.getInitialProps = async () => {
  return {
    namespacesRequired: [ResourceType.BASKETBALL]
  };
};

export default withTranslation()(FavoritesPage);
