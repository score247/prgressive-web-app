import * as React from "react";
import Layout from "../../components/layout";
import { LocalizedPage } from "../../common/helpers/Localizer";
import { ResourceKey, ResourceType } from "../../common/constants";
import withLoadingPage from "../../hoc/with-loading-page";

const NewsPage: LocalizedPage = ({ t }) => {
  const breadcrumbs = [t(ResourceKey.BASKETBALL), t(ResourceKey.NEWS)];

  return (
    <Layout breadcrumbs={breadcrumbs}>
      <h1>Basketball - News</h1>
    </Layout>
  );
};

NewsPage.getInitialProps = async () => {
  return {
    namespacesRequired: [ResourceType.BASKETBALL]
  };
};

export default withLoadingPage(NewsPage);
