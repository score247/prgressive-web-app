import React from "react";
import SoccerMatchDetail from "../../components/soccer/match-detail";
import Layout from "../../components/layout";
import Banner from "../../components/layout/banner/Banner";
import { ResourceType } from "../../common/constants";
import { LocalizedPage, withTranslation } from "../../common/helpers/Localizer";
import { MatchInfo } from "../../models";
import { SoccerAPI } from "../../apis/soccer-api";
import { SportsEnum } from "../../common/enums/sport-enum";
import MatchLineups from "../../components/soccer/match-detail/lineups";

type Props = {
  matchId: string | string[];
};

const SoccerMatchDetailPage: LocalizedPage<Props> = props => {
  const { t, matchId } = props;
  return (
    <Layout
      title={t(SportsEnum.SOCCER)}
      breadcrumbs={[t(SportsEnum.SOCCER), "Match info"]}
    >
      <Banner url="#" imgSrc="/static/images/ads-banner-1.jpg" />
      <div className="content">
        {/* <MatchLineups matchId={matchInfo.Match.Id} /> */}
        <SoccerMatchDetail matchId={matchId} />
      </div>
    </Layout>
  );
};

SoccerMatchDetailPage.getInitialProps = async ({ query }) => {
  const { id } = query;

  return {
    matchId: id,
    namespacesRequired: [ResourceType.SOCCER]
  };
};

export default withTranslation()(SoccerMatchDetailPage);
