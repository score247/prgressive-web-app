import * as React from "react";
import Layout from "../../components/layout";
import { LocalizedPage, withTranslation } from "../../common/helpers/Localizer";
import { ResourceType, ResourceKey } from "../../common/constants";

const TVPage: LocalizedPage = ({ t }) => {
  const breadcrumbs = [t(ResourceKey.BASKETBALL), t(ResourceKey.TVSCHEDULES)];

  return (
    <Layout breadcrumbs={breadcrumbs}>
      <h1>E-Sports - TV</h1>
    </Layout>
  );
};

TVPage.getInitialProps = async () => {
  return {
    namespacesRequired: [ResourceType.BASKETBALL]
  };
};

export default withTranslation()(TVPage);
