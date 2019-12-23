import * as React from "react";
import Layout from "../../components/shared/layout/Layout";
import { useTranslation, LocalizedPage } from "../../common/helpers/Localizer";

const ESportsPage: LocalizedPage = () => {
  const { t } = useTranslation();
  return (
    <Layout title="E-Sports">
      <h1>{t("esports")}</h1>
    </Layout>
  );
};

ESportsPage.getInitialProps = async () => {
  return {
    namespacesRequired: ["esports"]
  };
};

export default ESportsPage;
