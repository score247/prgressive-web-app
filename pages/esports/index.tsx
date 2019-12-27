import * as React from "react";
import Layout from "../../components/layout";
import { withTranslation, LocalizedPage } from "../../common/helpers/Localizer";
import { ResourceType, ResourceKey } from "../../common/constants";

const Esports: LocalizedPage = props => {
  return (
    <Layout title={props.t(ResourceKey.ESPORTS)} breadcrumbs={[props.t(ResourceKey.ESPORTS)]}>
      <h1>{props.t(ResourceKey.ESPORTS)}</h1>
    </Layout>
  );
};

Esports.getInitialProps = () => ({
  namespacesRequired: [ResourceType.ESPORTS]
});

export default withTranslation()(Esports);
