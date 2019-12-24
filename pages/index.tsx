import * as React from "react";
import Layout from "../components/shared/layout/Layout";
import { MatchSummary } from "../models/MatchSummary";
import { LocalizedPage, withTranslation } from "../common/helpers/Localizer";
import { SportsEnum } from "../common/enums/sportenum";

const SoccerPage: LocalizedPage<{ matches: MatchSummary[] }, {}> = ({ matches, t }) => (
  <Layout title="Soccer" breadcrumbs={[t(SportsEnum.SOCCER)]}>
    <h1>Soccer Page</h1>
  </Layout>
);

SoccerPage.getInitialProps = async() =>{
  return {
    namespacesRequired: ["soccer"]
  }
}

export default withTranslation()(SoccerPage);
