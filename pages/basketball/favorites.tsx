import * as React from "react";
import Layout from "../../components/layout";
import { LocalizedPage } from "../../common/helpers/Localizer";
import withLoadingPage from "../../hoc/with-loading-page";
import { CommonResourceKey, ResourceType } from "../../common/resources";

const FavoritesPage: LocalizedPage = ({ t }) => {
  const breadcrumbs = [t(CommonResourceKey.BASKETBALL), t(CommonResourceKey.FAVORITES)];

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
