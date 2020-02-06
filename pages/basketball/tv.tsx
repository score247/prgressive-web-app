import * as React from "react";
import Layout from "../../components/layout";
import { LocalizedPage } from "../../common/helpers/Localizer";
import { ResourceType, ResourceKey } from "../../common/constants";
import withLoadingPage from "../../hoc/with-loading-page";

const TVPage: LocalizedPage = ({ t }) => {
  const breadcrumbs = [t(ResourceKey.BASKETBALL), t(ResourceKey.TV_SCHEDULES)];

  return (
    <Layout breadcrumbs={breadcrumbs}>
      <h1>Basketball - TV</h1>
    </Layout>
  );
};

TVPage.getInitialProps = async () => {
  return {
    namespacesRequired: [ResourceType.BASKETBALL]
  };
};

export default withLoadingPage(TVPage);
