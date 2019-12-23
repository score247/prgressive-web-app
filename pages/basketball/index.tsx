import * as React from "react";
import Layout from "../../components/shared/layout/Layout";
import { withTranslation, LocalizedPage } from "../../common/helpers/Localizer";

const Basketball: LocalizedPage = props => {
  return (
    <Layout title="Basketball">
      <h1>{props.t("common:basketball")}</h1>
    </Layout>
  );
};

Basketball.getInitialProps = () => ({
  namespacesRequired: ["basketball", "common"]
});

export default withTranslation(["basketball", "common"])(Basketball);
