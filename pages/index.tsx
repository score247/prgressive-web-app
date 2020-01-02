import * as React from "react";
import Layout from "../components/layout";
import DateBar from "../components/date-bar";
import Banner from "../components/layout/banner/Banner";
import MatchSummary from "../models/MatchSummary";
import { withTranslation } from "../common/helpers/Localizer";
import { SportsEnum } from "../common/enums/sportenum";
import { SoccerAPI } from "../apis/SoccerApi";
import { WithTranslation } from "next-i18next";

type State = {
  matches: MatchSummary[];
};

class SoccerPage extends React.Component<WithTranslation, State> {
  constructor(props: WithTranslation) {
    super(props);
    this.state = { matches: [] };
  }

  async componentDidMount() {
    const matches = await SoccerAPI.GetMatchesByDate(new Date());
    this.setState({ matches });
  }

  handleDateChange = async (date: Date) => {
    const matches = await SoccerAPI.GetMatchesByDate(date);
    this.setState({ matches });
  };

  handleLiveButtonClick = async () => {
    const matches = await SoccerAPI.GetLiveMatches();

    this.setState({ matches });
  };

  render() {
    const { t } = this.props;
    return (
      <Layout title={t(SportsEnum.SOCCER)} breadcrumbs={[t(SportsEnum.SOCCER)]}>
        <DateBar
          onDateChange={this.handleDateChange}
          onLiveMatchChange={this.handleLiveButtonClick}
        />
        <Banner url="#" imgSrc="/static/images/ads-banner-1" />
        <div className="content">
          <ul>
            {this.state.matches.map(match => (
              <li key={match.Id}>
                {match.HomeTeamName} - {match.AwayTeamName} - {match.Time}
              </li>
            ))}
          </ul>
        </div>
      </Layout>
    );
  }
}

export default withTranslation()(SoccerPage);
