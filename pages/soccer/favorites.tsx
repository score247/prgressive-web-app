import * as React from "react";
import Layout from "../../components/layout";
import { LocalizedPage } from "../../common/helpers/Localizer";
import withLoadingPage from "../../hoc/with-loading-page";
import { CommonResourceKey, ResourceType } from "../../common/resources";

const FavoritesPage: LocalizedPage = ({ t }) => {
  const breadcrumbs = [t(CommonResourceKey.SOCCER), t(CommonResourceKey.MY_FAVORITES)];

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

export default withLoadingPage(FavoritesPage);
