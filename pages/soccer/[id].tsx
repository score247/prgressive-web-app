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
  matchInfo: MatchInfo;
};

const SoccerMatchDetailPage: LocalizedPage<Props> = props => {
  const { t, matchInfo } = props;
  return (
    <Layout
      title={t(SportsEnum.SOCCER)}
      breadcrumbs={[t(SportsEnum.SOCCER), "Match info"]}
    >
      <Banner url="#" imgSrc="/static/images/ads-banner-1.jpg" />
      <div className="content">
        {/* <MatchLineups matchId={matchInfo.Match.Id} /> */}
        <SoccerMatchDetail matchInfo={matchInfo} />
      </div>
    </Layout>
  );
};

SoccerMatchDetailPage.getInitialProps = async ({ query }) => {
  const { id } = query;
  const matchInfo = await SoccerAPI.GetMatch(id);

  return {
    matchInfo,
    namespacesRequired: [ResourceType.SOCCER]
  };
};

export default withTranslation()(SoccerMatchDetailPage);
