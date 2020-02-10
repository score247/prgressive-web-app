import React from "react";
import Layout from "../../components/layout";
import { ResourceType, ResourceKey } from "../../common/constants";
import { LocalizedPage } from "../../common/helpers/Localizer";
import withLoadingPage from "../../hoc/with-loading-page";
import SoccerMatchDetail from "../../components/soccer/match-detail";

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
      <SoccerMatchDetail matchId={matchId} />
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
