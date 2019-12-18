import * as React from "react";
import { NextPage } from "next";
import Layout from "../../components/shared/layout/Layout";
import { MatchSummary } from "../../models/MatchSummary";
import { SoccerAPI } from "../../apis/SoccerApi";

const SoccerPage: NextPage<{ matches: MatchSummary[] }> = ({ matches }) => (
  <Layout>
    <h1>Soccer Page</h1>
    <ul>
      {matches.map(match => (
        <li>
          {match.HomeTeamName} - {match.AwayTeamName}
        </li>
      ))}
    </ul>
  </Layout>
);

SoccerPage.getInitialProps = async () => {
  const matches: MatchSummary[] = await SoccerAPI.GetMatchesByDate(
    "2019-12-19"
  );

  return { matches };
};

export default SoccerPage;
