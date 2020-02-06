import * as React from "react";
import Layout from "../../components/layout";
import { withTranslation, LocalizedPage } from "../../common/helpers/Localizer";
import { ResourceType, ResourceKey } from "../../common/constants";
import withLoadingPage from "../../hoc/with-loading-page";

const ESports: LocalizedPage = props => {
  return (
    <Layout title={props.t(ResourceKey.E_SPORTS)} breadcrumbs={[props.t(ResourceKey.E_SPORTS)]}>
      <h1>{props.t(ResourceKey.E_SPORTS)}</h1>
    </Layout>
  );
};

ESports.getInitialProps = () => ({
  namespacesRequired: [ResourceType.E_SPORTS]
});

export default withTranslation()(withLoadingPage(ESports));
