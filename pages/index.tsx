import * as React from "react";
import Layout from "../components/layout";
import DateBar from "../components/date-bar";
import Banner from "../components/layout/banner/Banner";
import { withTranslation } from "../common/helpers/Localizer";
import { SportsEnum } from "../common/enums/sport-enum";
import { ResourceType, ResourceKey, DateTimeFormat } from "../common/constants";
import { WithTranslation } from "next-i18next";
import { isSameDay } from "date-fns";
import { formatDate } from "../common/helpers/date-time-helper";
import DateSwitch from "../components/date-switch";
import FilterSoccerTable from "../components/soccer/filter-table";
import { SoccerSignalRClient } from "../apis/soccer-signalr-client";
import appSettings from "../app-settings";
import { MatchEventSignalRMessage } from "../models/soccer/signalr-messages";
import { DeviceContextConsumer } from "../contexts/device-context";
import { DeviceContextType } from "../contexts/device-context-type";
import { withLoadingPage } from "../hoc/with-loading-page";

type State = {
  selectedDate: Date;
  breadcrumbs: string[];
  onlyLiveMatch: boolean;
  soccerSignalRClient?: SoccerSignalRClient;
};

class SoccerPage extends React.Component<WithTranslation, State> {
  today: Date = new Date();
  filterSoccerTable: React.RefObject<FilterSoccerTable>;
  constructor(props: WithTranslation) {
    super(props);
    this.state = {
      selectedDate: new Date(),
      breadcrumbs: [props.t(SportsEnum.SOCCER), props.t(ResourceKey.TODAY)],
      onlyLiveMatch: false,
      soccerSignalRClient: undefined
    };
    this.filterSoccerTable = React.createRef<FilterSoccerTable>();
  }

  static async getInitialProps() {
    return {
      namespacesRequired: [ResourceType.COMMON]
    };
  }

  async componentDidMount() {
    this.setupSignalClient();
  }

  matchEventHandler = (message: MatchEventSignalRMessage) => {
    this.filterSoccerTable.current?.matchEventHandler(message);
  };

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

    await this.filterSoccerTable.current?.handleDateChange(date);
  };

  handleLiveButtonClick = async () => {
    const breadcrumbs = this.state.breadcrumbs.slice();
    breadcrumbs[1] = this.props.t(ResourceKey.LIVE_MATCH);

    this.setState({ onlyLiveMatch: true, breadcrumbs });
    await this.filterSoccerTable.current?.handleLiveButtonClick();
  };

  private setupSignalClient() {
    const eventHandlers = {
      MatchEvent: this.matchEventHandler
    };

    const client = new SoccerSignalRClient(
      appSettings.soccerPublisherUrl,
      eventHandlers
    );

    this.setState(
      {
        soccerSignalRClient: client
      },
      () => {
        client.start();
      }
    );
  }

  renderDateSwitch = ({ isMobile }: DeviceContextType) => (
    <>
      {!this.state.onlyLiveMatch && !isMobile && (
        <DateSwitch
          currentDate={this.state.selectedDate}
          onClick={this.handleDateChange}
        />
      )}
    </>
  );

  render() {
    const { t } = this.props;
    return (
      <Layout title={t(SportsEnum.SOCCER)} breadcrumbs={this.state.breadcrumbs}>
        <Banner url="#" imgSrc="/static/images/ads-banner-1.jpg" />
        <DateBar
          onDateChange={this.handleDateChange}
          onLiveMatchChange={this.handleLiveButtonClick}
          onlyLiveMatch={this.state.onlyLiveMatch}
          selectedDate={this.state.selectedDate}
        />
        <div className="content">
          <FilterSoccerTable ref={this.filterSoccerTable} />
          <DeviceContextConsumer>{this.renderDateSwitch}</DeviceContextConsumer>
        </div>
      </Layout>
    );
  }
}

export default withLoadingPage(withTranslation()(SoccerPage));
