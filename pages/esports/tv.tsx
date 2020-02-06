import * as React from "react";
import Layout from "../../components/layout";
import { LocalizedPage } from "../../common/helpers/Localizer";
import { ResourceType, ResourceKey } from "../../common/constants";
import withLoadingPage from "../../hoc/with-loading-page";

const TVPage: LocalizedPage = ({ t }) => {
  const breadcrumbs = [t(ResourceKey.E_SPORTS), t(ResourceKey.TV_SCHEDULES)];

  return (
    <Layout breadcrumbs={breadcrumbs}>
      <h1>E-Sports - TV</h1>
    </Layout>
  );
};

TVPage.getInitialProps = async () => {
  return {
    namespacesRequired: [ResourceType.E_SPORTS]
  };
};

export default withLoadingPage(TVPage);
