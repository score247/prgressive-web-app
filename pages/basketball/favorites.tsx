import * as React from "react";
import Layout from "../../components/layout";
import { LocalizedPage } from "../../common/helpers/Localizer";
import { ResourceKey, ResourceType } from "../../common/constants";
import withLoadingPage from "../../hoc/with-loading-page";

const FavoritesPage: LocalizedPage = ({ t }) => {
  const breadcrumbs = [t(ResourceKey.BASKETBALL), t(ResourceKey.FAVORITES)];

  return (
    <Layout breadcrumbs={breadcrumbs}>
      <h1>basketball - Favorites [Ricky Test]</h1>
    </Layout>
  );
};

FavoritesPage.getInitialProps = async () => {
  return {
    namespacesRequired: [ResourceType.BASKETBALL]
  };
};

export default withLoadingPage(FavoritesPage);
