import * as React from "react";
import Layout from "../../components/shared/layout/Layout";
import {  LocalizedPage, withTranslation } from "../../common/helpers/Localizer";
import { SportsEnum } from "../../common/enums/sportenum";

const FavoritesPage: LocalizedPage = ({t}) => {
  const breadcrumbs = [t(SportsEnum.SOCCER), t("myfavorites")];

  return (
    <Layout breadcrumbs={breadcrumbs}>
      <h1>Soccer - Favorites</h1>
    </Layout>
  );
};

FavoritesPage.getInitialProps = async () => {
  return {
    namespacesRequired: ["soccer"]
  };
};

export default withTranslation()(FavoritesPage);
