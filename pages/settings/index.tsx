import * as React from "react";
import Layout from "../../components/layout";
import { LocalizedPage, withTranslation } from "../../common/helpers/Localizer";

const SettingPage: LocalizedPage = ({ t }) => {
  const breadcrumbs = [t("settings")];

  return (
    <Layout title="Setting" breadcrumbs={breadcrumbs}>
      <h1>Setting Page</h1>
    </Layout>
  );
};

SettingPage.getInitialProps = async () => {
  return {
    namespacesRequired: ["common"]
  };
};

export default withTranslation()(SettingPage);
