import * as React from "react";
import Layout from "../../components/layout";
import { LocalizedPage, withTranslation } from "../../common/helpers/Localizer";
import { ResourceKey, ResourceType } from "../../common/constants";
import withLoadingPage from "../../hoc/with-loading-page";

const FavoritesPage: LocalizedPage = ({ t }) => {
  const breadcrumbs = [t(ResourceKey.E_SPORTS), t(ResourceKey.FAVORITES)];

  return (
    <Layout breadcrumbs={breadcrumbs}>
      <h1>ESport - Favorites</h1>
    </Layout>
  );
};

FavoritesPage.getInitialProps = async () => {
  return {
    namespacesRequired: [ResourceType.E_SPORTS]
  };
};

export default withTranslation()(withLoadingPage(FavoritesPage));
