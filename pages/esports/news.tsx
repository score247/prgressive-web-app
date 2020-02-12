import * as React from "react";
import Layout from "../../components/layout";
import { LocalizedPage } from "../../common/helpers/Localizer";
import { CommonResourceKey, ResourceType } from "../../common/constants";
import withLoadingPage from "../../hoc/with-loading-page";

const NewsPage: LocalizedPage = ({ t }) => {
  const breadcrumbs = [t(CommonResourceKey.E_SPORTS), t(CommonResourceKey.NEWS)];

  return (
    <Layout breadcrumbs={breadcrumbs}>
      <h1>E-Sports - News</h1>
    </Layout>
  );
};

NewsPage.getInitialProps = async () => {
  return {
    namespacesRequired: [ResourceType.E_SPORTS]
  };
};

export default withLoadingPage(NewsPage);
