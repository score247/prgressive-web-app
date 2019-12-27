import * as React from "react";
import Layout from "../../components/layout";
import { LocalizedPage, withTranslation } from "../../common/helpers/Localizer";
import { ResourceType, ResourceKey } from "../../common/constants";

const FavoritesPage: LocalizedPage = ({ t }) => {
  const breadcrumbs = [t(ResourceKey.SOCCER), t(ResourceKey.MYFAVORITES)];

  return (
    <Layout breadcrumbs={breadcrumbs}>
      <h1>Soccer - Favorites</h1>
    </Layout>
  );
};

FavoritesPage.getInitialProps = async () => {
  return {
    namespacesRequired: [ResourceType.SOCCER]
  };
};

export default withTranslation()(FavoritesPage);
