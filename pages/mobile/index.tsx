import * as React from "react";
import Layout from "../../components/layout";
import { LocalizedPage, withTranslation } from "../../common/helpers/Localizer";
import { ResourceKey, ResourceType } from "../../common/constants";

const MobilePage: LocalizedPage = ({t}) => {
  return (
    <Layout title="Mobile" breadcrumbs={[t(ResourceKey.MOBILE)]}>
      <h1>Mobile Page</h1>
    </Layout>
  );
};

MobilePage.getInitialProps = async () => {
  return {
    namespacesRequired: [ResourceType.COMMON]
  };
};

export default withTranslation()(MobilePage) ;
