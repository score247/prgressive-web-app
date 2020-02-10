import "./style.scss";
import React from "react";
import SportRadarWidget from "../../sportradar-widget";

type Props = {
    matchId: string;
};

type State = {
    isBallTrackerCollapsed: boolean;
};

class MatchInfoTab extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);

        this.state = { isBallTrackerCollapsed: false };
    }

    render() {
        const collapseExpandClass = this.state.isBallTrackerCollapsed ? "expand" : "collapse";
        const ballTrackerHeader = <div className="ball-tracker-header">
            <span className="text">Ball Tracker</span>
            <span 
                className={collapseExpandClass} 
                onClick={() => this.setState({ isBallTrackerCollapsed: !this.state.isBallTrackerCollapsed})}>
                    <span className="icon-arrow-down"></span>
            </span>
        </div>;
        const ballTrackerContent = <div className={this.state.isBallTrackerCollapsed ? "display-none" : ""}>
            <SportRadarWidget matchId={this.props.matchId} widgetId="widget-ball-tracker" widgetName="match.lmtPlus" />
        </div>;

        return <>
            <div className="info-tab">
                <div className="left-section"></div>
                <div className="ball-tracker">
                    {ballTrackerHeader}
                    {ballTrackerContent}
                </div>
                <div className="right-section"></div>
            </div>
            
        </>;
    }
}

export default MatchInfoTab;