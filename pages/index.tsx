import * as React from "react";
import "./basketball/style.scss";
import Layout from "../components/layout";
import DateBar from "../components/date-bar";
import Banner from "../components/layout/banner/Banner";
import { MatchSummary } from "../models";
import { withTranslation } from "../common/helpers/Localizer";
import { SportsEnum } from "../common/enums/sportenum";
import { ResourceType, ResourceKey, DateTimeFormat } from "../common/constants";
import { SoccerAPI } from "../apis/SoccerApi";
import { WithTranslation } from "next-i18next";
import { isSameDay } from "date-fns";
import { formatDate } from "../common/helpers/date-time-helper";
import DateSwitch from "../components/date-switch";
import SoccerTable from "../components/soccer/table";

type State = {
  matches: MatchSummary[];
  selectedDate: Date;
  breadcrumbs: string[];
  onlyLiveMatch: boolean;
};

class SoccerPage extends React.Component<WithTranslation, State> {
  today: Date = new Date();

  constructor(props: WithTranslation) {
    super(props);

    this.state = {
      matches: [],
      selectedDate: new Date(),
      breadcrumbs: [props.t(SportsEnum.SOCCER), props.t(ResourceKey.TODAY)],
      onlyLiveMatch: false
    };
  }

  static async getInitialProps() {
    return {
      namespacesRequired: [ResourceType.COMMON]
    };
  }

  async componentDidMount() {
    const matches = await SoccerAPI.GetMatchesByDate(new Date());
    this.setState({ matches });
  }

  handleDateChange = async (date: Date) => {
    const matches = await SoccerAPI.GetMatchesByDate(date);

    const breadcrumbs = this.state.breadcrumbs.slice();
    breadcrumbs[1] = isSameDay(this.today, date)
      ? this.props.t(ResourceKey.TODAY)
      : formatDate(date, DateTimeFormat.DATE_ONLY, this.props.i18n.language);

    this.setState({
      matches,
      selectedDate: date,
      onlyLiveMatch: false,
      breadcrumbs
    });
  };

  handleLiveButtonClick = async () => {
    const matches = await SoccerAPI.GetLiveMatches();
    const breadcrumbs = this.state.breadcrumbs.slice();
    breadcrumbs[1] = this.props.t(ResourceKey.LIVE_MATCH);

    this.setState({ matches, onlyLiveMatch: true, breadcrumbs });
  };

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
          <div className="table">
            <SoccerTable matches={this.state.matches} />
            {!this.state.onlyLiveMatch && (
              <DateSwitch
                currentDate={this.state.selectedDate}
                onClick={this.handleDateChange}
              />
            )}
          </div>
        </div>
      </Layout>
    );
  }
}

export default withTranslation()(SoccerPage);
