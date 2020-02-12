import * as React from "react";
import Layout from "../../components/layout";
import { LocalizedPage } from "../../common/helpers/Localizer";
import { CommonResourceKey, ResourceType } from "../../common/constants";
import withLoadingPage from "../../hoc/with-loading-page";

const MobilePage: LocalizedPage = ({ t }) => {
  return (
    <Layout title="Mobile" breadcrumbs={[t(CommonResourceKey.MOBILE)]}>
      <h1>Mobile Page</h1>
    </Layout>
  );
};

MobilePage.getInitialProps = async () => {
  return {
    namespacesRequired: [ResourceType.COMMON]
  };
};

export default withLoadingPage(MobilePage);
