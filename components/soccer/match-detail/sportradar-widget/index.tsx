import React from "react";

type Props = {
    matchId: string,
    widgetId: string,
    widgetName: string
};

class SportRadarWidget extends React.Component<Props> {
    componentDidMount() {
        const script = document.createElement("script");

        script.src = "https://widgets.sir.sportradar.com/sportradar/widgetloader";
        script.async = true;

        document.body.appendChild(script);
    }

    render() {
        const secondIndex = 2;
        const id = this.props.matchId.split(":")[secondIndex];

        return (<div id={this.props.widgetId} data-sr-widget={this.props.widgetName} data-sr-match-id={id}></div>);
    }
}

export default SportRadarWidget;