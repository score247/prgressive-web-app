import * as React from "react";
import { NextPage } from "next";
import Layout from "../../components/shared/layout/Layout";
import { useTranslation, LocalizedPage } from "../../common/helpers/Localizer";

const NewsPage: LocalizedPage = () => {
  const { t } = useTranslation();
  return (
    <Layout>
      <h1>Soccer - News</h1>
    </Layout>
  );
};

NewsPage.getInitialProps = async () => {
  return {
    namespacesRequired: ["esports"]
  };
};

export default NewsPage;
