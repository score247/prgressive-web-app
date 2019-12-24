import * as React from "react";
import Layout from "../../components/shared/layout/Layout";
import { LocalizedPage, withTranslation } from "../../common/helpers/Localizer";
import { SportsEnum } from "../../common/enums/sportenum";

const NewsPage: LocalizedPage = ({t}) => {
  const breadcrumbs = [t(SportsEnum.SOCCER), t("news")];

  return (
    <Layout breadcrumbs={breadcrumbs}>
      <h1>Soccer - News</h1>
    </Layout>
  );
};

NewsPage.getInitialProps = async () => {
  return {
    namespacesRequired: ["esports"]
  };
};

export default withTranslation()(NewsPage);
