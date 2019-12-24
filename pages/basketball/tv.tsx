import * as React from "react";
import Layout from "../../components/shared/layout/Layout";
import {  LocalizedPage, withTranslation } from "../../common/helpers/Localizer";
import { SportsEnum } from "../../common/enums/sportenum";

const TVPage: LocalizedPage = ({t}) => {
  const breadcrumbs = [t(SportsEnum.BASKETBALL), t("tvschedules")];
  
  return (
    <Layout breadcrumbs={breadcrumbs}>
      <h1>E-Sports - TV</h1>
    </Layout>
  );
};

TVPage.getInitialProps = async () => {
  return {
    namespacesRequired: ["soccer"]
  };
};

export default withTranslation()(TVPage);
