import * as React from "react";
import Layout from "../../components/shared/layout/Layout";
import { LocalizedPage } from "../../common/helpers/Localizer";

const SettingPage: LocalizedPage = () => {
  return (
    <Layout title="Setting">
      <div>Setting Page</div>
    </Layout>
  );
};

SettingPage.getInitialProps = async () => {
  return {
    namespacesRequired: ["esports"]
  };
};

export default SettingPage;
