import React from "react";
import SoccerMatchDetail from "../../components/soccer/match-detail";
import Layout from "../../components/layout";
import Banner from "../../components/layout/banner/Banner";
import { ResourceType, ResourceKey } from "../../common/constants";
import { LocalizedPage } from "../../common/helpers/Localizer";
import withLoadingPage from "../../hoc/with-loading-page";

type Props = {
  matchId: string | string[];
};

const SoccerMatchDetailPage: LocalizedPage<Props> = props => {
  const { t, matchId } = props;
  return (
    <Layout
      title={t(ResourceKey.SOCCER)}
      breadcrumbs={[
        t(ResourceKey.SOCCER),
        t(ResourceKey.MATCHINFO, { ns: ResourceType.SOCCER })
      ]}
    >
      <Banner url="#" imgSrc="/static/images/ads-banner-1.jpg" />
      <div className="content">
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

export default withLoadingPage(SoccerMatchDetailPage);
