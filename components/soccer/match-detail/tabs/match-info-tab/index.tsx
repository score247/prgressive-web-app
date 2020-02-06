import React from "react";
import SportRadarWidget from "../../sportradar-widget";

type Props = {
    matchId: string;
};

class MatchInfoTab extends React.Component<Props> {

    render() {
        return <>
            {/* <SportRadarWidget matchId={this.props.matchId} widgetId="widget-lineups" widgetName="match.lineups" /> */}
            <SportRadarWidget matchId={this.props.matchId} widgetId="widget-ball-tracker" widgetName="match.lmtPlus" />
        </>;
    }
}

export default MatchInfoTab;