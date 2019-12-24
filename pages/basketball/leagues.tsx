import * as React from "react";
import Layout from "../../components/shared/layout/Layout";
import { LocalizedPage, withTranslation } from "../../common/helpers/Localizer";
import { SportsEnum } from "../../common/enums/sportenum";

const LeaguesPage: LocalizedPage = ({t}) => {
  const breadcrumbs = [t(SportsEnum.BASKETBALL), t("leagues")];

  return (
    <Layout breadcrumbs={breadcrumbs}>
      <h1>Soccer - Leagues</h1>
    </Layout>
  );
};

LeaguesPage.getInitialProps = async () => {
  return {
    namespacesRequired: ["esports"]
  };
};

export default withTranslation()(LeaguesPage);
