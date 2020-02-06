import * as React from "react";
import Layout from "../../components/layout";
import { LocalizedPage } from "../../common/helpers/Localizer";
import { ResourceKey, ResourceType } from "../../common/constants";
import withLoadingPage from "../../hoc/with-loading-page";

const SettingPage: LocalizedPage = ({ t }) => {
  const breadcrumbs = [t(ResourceKey.SETTINGS)];

  return (
    <Layout title="Setting" breadcrumbs={breadcrumbs}>
      <h1>Setting Page</h1>
    </Layout>
  );
};

SettingPage.getInitialProps = async () => {
  return {
    namespacesRequired: [ResourceType.COMMON]
  };
};

export default withLoadingPage(SettingPage);
