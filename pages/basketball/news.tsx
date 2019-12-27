import * as React from "react";
import Layout from "../../components/shared/layout/Layout";
import { LocalizedPage, withTranslation } from "../../common/helpers/Localizer";
import { SportsEnum } from "../../common/enums/sportenum";
import { ResourceKey, ResourceType } from "../../common/constants";

const NewsPage: LocalizedPage = ({t}) => {
  const breadcrumbs = [t(ResourceKey.BASKETBALL), t(ResourceKey.NEWS)];

  return (
    <Layout breadcrumbs={breadcrumbs}>
      <h1>E-Sports - News</h1>
    </Layout>
  );
};

NewsPage.getInitialProps = async () => {
  return {
    namespacesRequired: [ResourceType.BASKETBALL]
  };
};

export default withTranslation()(NewsPage);
