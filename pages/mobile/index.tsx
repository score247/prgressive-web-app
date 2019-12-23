import * as React from "react";
import Layout from "../../components/shared/layout/Layout";
import { LocalizedPage } from "../../common/helpers/Localizer";

const MobilePage: LocalizedPage = () => {
  return (
    <Layout title="Mobile">
      <div>Mobile Page</div>
    </Layout>
  );
};

MobilePage.getInitialProps = async () => {
  return {
    namespacesRequired: ["esports"]
  };
};

export default MobilePage;
