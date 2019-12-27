import * as React from "react";
import Layout from "../../components/shared/layout/Layout";
import { withTranslation, LocalizedPage } from "../../common/helpers/Localizer";
import { ResourceType, ResourceKey } from "../../common/constants";

const Basketball: LocalizedPage = props => {
  return (
    <Layout title="Basketball" breadcrumbs={[props.t(ResourceKey.BASKETBALL)]}>
      <h1>{props.t(ResourceKey.ESPORTS)}</h1>
    </Layout>
  );
};

Basketball.getInitialProps = () => ({
  namespacesRequired: [ResourceType.ESPORTS]
});

export default withTranslation()(Basketball);
