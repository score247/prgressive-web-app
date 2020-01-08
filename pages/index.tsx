import * as React from "react";
import "./basketball/style.scss";
import Layout from "../components/layout";
import DateBar from "../components/date-bar";
import Banner from "../components/layout/banner/Banner";
import { MatchSummary } from "../models";
import { withTranslation } from "../common/helpers/Localizer";
import { SportsEnum } from "../common/enums/sportenum";
import { ResourceType, ResourceKey, DateTimeFormat } from "../common/constants";
import { SoccerAPI } from "../apis/soccer-api";
import { WithTranslation } from "next-i18next";
import { isSameDay } from "date-fns";
import { formatDate } from "../common/helpers/date-time-helper";
import DateSwitch from "../components/date-switch";
import SoccerTable from "../components/soccer/table";
import { SoccerSignalRClient } from "../apis/soccer-signalr-client";
import appSettings from "../app-settings";
import { MatchEvent, MatchEventSignalRMessage } from "../models/soccer/signalr-messages";

type State = {
  selectedDate: Date;
  breadcrumbs: string[];
  onlyLiveMatch: boolean;
  soccerSignalRClient?: SoccerSignalRClient
};

class SoccerPage extends React.Component<WithTranslation, State> {
  today: Date = new Date();
  soccerTable: React.RefObject<SoccerTable>;
  constructor(props: WithTranslation) {
    super(props);
    this.state = {
      selectedDate: new Date(),
      breadcrumbs: [props.t(SportsEnum.SOCCER), props.t(ResourceKey.TODAY)],
      onlyLiveMatch: false,
      soccerSignalRClient: undefined
    };
    this.soccerTable = React.createRef<SoccerTable>();
  }

  static async getInitialProps() {
    return {
      namespacesRequired: [ResourceType.COMMON]
    };
  }

  async componentDidMount() {
    const client = this.setupSignalClient();

    this.setState({
      soccerSignalRClient: client,
    }, () => {
      client.start();
    });
  }

  matchEventHandler = (message: MatchEventSignalRMessage) => {
    this.soccerTable.current?.matchEventHandler(message);
  }

  handleDateChange = async (date: Date) => {
    const breadcrumbs = this.state.breadcrumbs.slice();
    breadcrumbs[1] = isSameDay(this.today, date)
      ? this.props.t(ResourceKey.TODAY)
      : formatDate(date, DateTimeFormat.DATE_ONLY, this.props.i18n.language);

    this.setState({
      selectedDate: date,
      onlyLiveMatch: false,
      breadcrumbs
    });

    await this.soccerTable.current?.handleDateChange(date);
  };

  handleLiveButtonClick = async () => {
    const breadcrumbs = this.state.breadcrumbs.slice();
    breadcrumbs[1] = this.props.t(ResourceKey.LIVE_MATCH);

    this.setState({ onlyLiveMatch: true, breadcrumbs });
    await this.soccerTable.current?.handleLiveButtonClick();
  };

  private setupSignalClient() {
    const eventHandlers = {
      "MatchEvent": this.matchEventHandler
    };

    return new SoccerSignalRClient(appSettings.soccerPublisherUrl, eventHandlers);
  }

  render() {
    const { t } = this.props;
    return (
      <Layout title={t(SportsEnum.SOCCER)} breadcrumbs={this.state.breadcrumbs}>
        <DateBar
          onDateChange={this.handleDateChange}
          onLiveMatchChange={this.handleLiveButtonClick}
          onlyLiveMatch={this.state.onlyLiveMatch}
          selectedDate={this.state.selectedDate}
        />
        <Banner url="#" imgSrc="/static/images/ads-banner-1" />
        <div className="content">
          <SoccerTable ref={this.soccerTable} />
          {!this.state.onlyLiveMatch && (
            <DateSwitch
              currentDate={this.state.selectedDate}
              onClick={this.handleDateChange}
            />
          )}
        </div>
      </Layout>
    );
  }
}

export default withTranslation()(SoccerPage);
