import React from "react";
import { ResourceType } from "../../common/constants";
import { LocalizedPage, withTranslation } from "../../common/helpers/Localizer";
import { MatchInfo } from "../../models";
import { SoccerAPI } from "../../apis/soccer-api";
import SoccerMatchDetail from "../../components/soccer/match-detail";

type Props = {
    matchInfo: MatchInfo
};

const SoccerMatchDetailPage: LocalizedPage<Props> = (props) => {
    return (<SoccerMatchDetail matchInfo={props.matchInfo} />);
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