import * as React from "react";
import Layout from "../../components/shared/layout/Layout";
import { LocalizedPage } from "../../common/helpers/Localizer";

const SettingPage: LocalizedPage = () => {
  return (
    <Layout title="Setting">
      <h1>Setting Page</h1>
    </Layout>
  );
};

SettingPage.getInitialProps = async () => {
  return {
    namespacesRequired: ["esports"]
  };
};

export default SettingPage;
