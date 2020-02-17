import * as React from "react";
import Layout from "../../components/layout";
import { LocalizedPage } from "../../common/helpers/Localizer";
import withLoadingPage from "../../hoc/with-loading-page";
import { CommonResourceKey, ResourceType } from "../../common/resources";

const ESports: LocalizedPage = props => {
  return (
    <Layout title={props.t(CommonResourceKey.E_SPORTS)} breadcrumbs={[props.t(CommonResourceKey.E_SPORTS)]}>
      <h1>{props.t(CommonResourceKey.E_SPORTS)}</h1>
    </Layout>
  );
};

ESports.getInitialProps = () => ({
  namespacesRequired: [ResourceType.E_SPORTS]
});

export default withLoadingPage(ESports);
