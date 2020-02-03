import React from "react";

type Props = {
    matchId: string;
};

class MatchLineups extends React.Component<Props> {
    componentDidMount() {
        const script = document.createElement("script");

        script.src = "https://widgets.sir.sportradar.com/sportradar/widgetloader";
        script.async = true;

        document.body.appendChild(script);
    }

    render() {
        const id = this.props.matchId.split(":")[2];

        return (<div id="sr-widget" data-sr-widget="match.lineups" data-sr-match-id={id}></div>);
    }
}

export default MatchLineups;