import * as React from "react";
import { NextPage } from "next";
import Layout from "../../components/shared/layout/Layout";
import { useTranslation, LocalizedPage } from "../../common/helpers/Localizer";

const ESportsPage: LocalizedPage = () => {
  const { t } = useTranslation();
  return (
    <Layout>
      <div>{t("esports")}</div>
    </Layout>
  );
};

ESportsPage.getInitialProps = async () => {
  return {
    namespacesRequired: ['esports']
  }
}

export default ESportsPage;
