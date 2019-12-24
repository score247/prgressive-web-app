import * as React from "react";
import Layout from "../../components/shared/layout/Layout";
import { LocalizedPage, withTranslation } from "../../common/helpers/Localizer";
import { SportsEnum } from "../../common/enums/sportenum";

const ESportsPage: LocalizedPage = ({t}) => {

  return (
    <Layout title="E-Sports" breadcrumbs={[t(SportsEnum.ESPORTS)]}>
      <h1>{t("esports")}</h1>
    </Layout>
  );
};

ESportsPage.getInitialProps = async () => {
  return {
    namespacesRequired: ["esports"]
  };
};

export default  withTranslation()(ESportsPage);
