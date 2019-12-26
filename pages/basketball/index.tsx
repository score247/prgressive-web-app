import * as React from "react";
import Layout from "../../components/shared/layout/Layout";
import { withTranslation, LocalizedPage } from "../../common/helpers/Localizer";
import { SportsEnum } from "../../common/enums/sportenum";
import { ResourceType } from "../../common/constants";

const Basketball: LocalizedPage = props => {
  return (
    <Layout title="Basketball" breadcrumbs={[props.t(SportsEnum.BASKETBALL)]}>
      <h1>{props.t("common:basketball")}</h1>
    </Layout>
  );
};

Basketball.getInitialProps = () => ({
  namespacesRequired: [ResourceType.BASKETBALL]
});

export default withTranslation(ResourceType.BASKETBALL)(Basketball);
