import * as React from "react";
import Layout from "../../components/shared/layout/Layout";
import { withTranslation, LocalizedPage } from "../../common/helpers/Localizer";

const Basketball: LocalizedPage = props => (
  <Layout>
    <div>{props.t("basketball", { ns: "common" })}</div>
  </Layout>
);

Basketball.getInitialProps = () => ({
  namespacesRequired: ["basketball"]
});

export default withTranslation(["basketball", "common"])(Basketball);
