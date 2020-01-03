import * as React from "react";
import Layout from "../components/layout";
import DateBar from "../components/date-bar";
import Banner from "../components/layout/banner/Banner";
import { MatchSummary } from "../models";
import { withTranslation } from "../common/helpers/Localizer";
import { SportsEnum } from "../common/enums/sportenum";
import { ResourceType, ResourceKey, DateTimeFormat } from "../common/constants";
import { SoccerAPI } from "../apis/SoccerApi";
import { WithTranslation } from "next-i18next";
import { isSameDay, addDays } from "date-fns";
import { formatDate } from "../common/helpers/date-time-helper";

type State = {
  matches: MatchSummary[];
  selectedDate: Date;
  yesterday: Date;
  tomorrow: Date;
  breadcrumbs: string[];
  onlyLiveMatch: boolean;
};

class SoccerPage extends React.Component<WithTranslation, State> {
  today: Date = new Date();

  constructor(props: WithTranslation) {
    super(props);

    const selectedDate = new Date();
    const yesterday = addDays(selectedDate, -1);
    const tomorrow = addDays(selectedDate, 1);

    this.state = {
      matches: [],
      selectedDate,
      yesterday,
      tomorrow,
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
      breadcrumbs,
      yesterday: addDays(date, -1),
      tomorrow: addDays(date, 1)
    });
  };

  handleLiveButtonClick = async () => {
    const matches = await SoccerAPI.GetLiveMatches();
    const breadcrumbs = this.state.breadcrumbs.slice();
    breadcrumbs[1] = this.props.t(ResourceKey.LIVE_MATCH);

    this.setState({ matches, onlyLiveMatch: true, breadcrumbs });
  };

  render() {
    const { t, i18n } = this.props;
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
          <ul>
            {this.state.matches.map(match => (
              <li key={match.Id}>
                {match.HomeTeamName} - {match.AwayTeamName}
              </li>
            ))}
          </ul>

          <div>
            <button
              onClick={this.handleDateChange.bind(this, this.state.yesterday)}
            >
              {formatDate(
                this.state.yesterday,
                DateTimeFormat.DATE_ONLY,
                i18n.language
              )}
            </button>
            <button
              onClick={this.handleDateChange.bind(this, this.state.tomorrow)}
            >
              {formatDate(
                this.state.tomorrow,
                DateTimeFormat.DATE_ONLY,
                i18n.language
              )}
            </button>
          </div>
        </div>
      </Layout>
    );
  }
}

export default withTranslation()(SoccerPage);
