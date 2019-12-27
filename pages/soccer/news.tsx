import * as React from "react";
import Layout from "../../components/shared/layout/Layout";
import { LocalizedPage, withTranslation } from "../../common/helpers/Localizer";
import { ResourceType, ResourceKey } from "../../common/constants";

const NewsPage: LocalizedPage = ({t}) => {
  const breadcrumbs = [t(ResourceKey.SOCCER), t(ResourceKey.NEWS)];

  return (
    <Layout breadcrumbs={breadcrumbs}>
      <h1>Soccer - News</h1>
    </Layout>
  );
};

NewsPage.getInitialProps = async () => {
  return {
    namespacesRequired: [ResourceType.SOCCER]
  };
};

export default withTranslation()(NewsPage);
