import * as React from "react";
import Layout from "../../components/layout";
import { LocalizedPage, withTranslation } from "../../common/helpers/Localizer";
import { ResourceKey, ResourceType } from "../../common/constants";

const NewsPage: LocalizedPage = ({ t }) => {
  const breadcrumbs = [t(ResourceKey.ESPORTS), t(ResourceKey.NEWS)];

  return (
    <Layout breadcrumbs={breadcrumbs}>
      <h1>E-Sports - News</h1>
    </Layout>
  );
};

NewsPage.getInitialProps = async () => {
  return {
    namespacesRequired: [ResourceType.ESPORTS]
  };
};

export default withTranslation()(NewsPage);
