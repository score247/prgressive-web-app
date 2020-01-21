import React from "react";
import { useRouter } from "next/router";
import { ResourceType } from "../../common/constants";
import { LocalizedPage, withTranslation } from "../../common/helpers/Localizer";
import { MatchInfo } from "../../models";
import { SoccerAPI } from "../../apis/soccer-api";

type Props = {
    matchInfo: MatchInfo
};

const MatchDetailPage: LocalizedPage<Props> = (props) => {
    const { matchInfo } = props;
    const match = matchInfo.Match;

    return (
        <div>
            <span>{match.HomeTeamName}</span>
            <span>{match.HomeScore}</span>
            <span>-</span>
            <span>{match.AwayScore}</span>
            <span>{match.AwayTeamName}</span>
        </div>
    );
};

MatchDetailPage.getInitialProps = async ({ query }) => {
    const { id } = query;
    const matchInfo = await SoccerAPI.GetMatch(id);

    return {
        matchInfo,
        namespacesRequired: [ResourceType.SOCCER]
    };
};

export default withTranslation()(MatchDetailPage);