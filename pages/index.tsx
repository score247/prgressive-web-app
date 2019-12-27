import * as React from "react";
import Layout from "../components/shared/layout/Layout";
import { MatchSummary } from "../models/MatchSummary";
import { LocalizedPage, withTranslation } from "../common/helpers/Localizer";
import { SportsEnum } from "../common/enums/sportenum";
import { ResourceType } from "../common/constants";
import { SoccerAPI } from "../apis/SoccerApi";

const SoccerPage: LocalizedPage<{ matches: MatchSummary[] }, {}> = ({
  matches,
  t
}) => (
  <Layout title={t(SportsEnum.SOCCER)} breadcrumbs={[t(SportsEnum.SOCCER)]}>
    <h1>Soccer Page</h1>
    <ul>
      {matches.map(match => (
        <li key={match.Id}>
          {match.HomeTeamName} - {match.AwayTeamName} -{" "}
          {new Date(match.EventDate[0]).toLocaleString()}
        </li>
      ))}
    </ul>
  </Layout>
);

SoccerPage.getInitialProps = async () => {
  const matches = await SoccerAPI.GetMatchesByDate("2019-12-26");

  return {
    namespacesRequired: [ResourceType.SOCCER],
    matches
  };
};

export default withTranslation()(SoccerPage);
