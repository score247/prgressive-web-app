import * as React from "react";
import { NextPage } from "next";
import Layout from "../components/shared/layout/Layout";
import { MatchSummary } from "../models/MatchSummary";

const SoccerPage: NextPage<{ matches: MatchSummary[] }> = ({ matches }) => (
  <Layout title="Soccer">
    <h1>Soccer Page</h1>
  </Layout>
);

export default SoccerPage;
