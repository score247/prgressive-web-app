import * as React from "react";
import Layout from "../../components/layout";
import { LocalizedPage } from "../../common/helpers/Localizer";

const MobilePage: LocalizedPage = () => {
  return (
    <Layout title="Mobile">
      <h1>Mobile Page</h1>
    </Layout>
  );
};

MobilePage.getInitialProps = async () => {
  return {
    namespacesRequired: ["esports"]
  };
};

export default MobilePage;
