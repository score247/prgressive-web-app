import React from "react";
import { shallow } from "enzyme";
import HomeTeam from "./index";
import { MatchStatusType } from "../../../../../common/enums/match-status-type";
import { PeriodType } from "../../../../../common/enums/period-type";

describe("HomeTeam", () => {
  it("should render yellow card when yellowCards > 0", () => {
    const props: any = {
      match: {
        MatchPeriods: [],
        HomeTeamName: "home team name",
        HomeYellowCards: 1,
        EventStatus: {
          Value: MatchStatusType.LIVE.value,
          DisplayName: MatchStatusType.LIVE.displayName
        }
      }
    };

    const wrapper = shallow(<HomeTeam {...props} />);
    expect(wrapper.find(".yellow-card").length).toEqual(1);
  });

  it("should render red card when redCards > 0", () => {
    const props: any = {
      match: {
        MatchPeriods: [],
        HomeTeamName: "home team name",
        HomeRedCards: 1,
        HomeYellowRedCards: 0,
        EventStatus: {
          Value: MatchStatusType.LIVE.value,
          DisplayName: MatchStatusType.LIVE.displayName
        }
      }
    };

    const wrapper = shallow(<HomeTeam {...props} />);
    console.log(wrapper.html());
    expect(wrapper.find(".red-card").length).toEqual(1);
  });

  it("should render penalty icon when home team wins penalty and the match is closed", () => {
    const props: any = {
      match: {
        MatchPeriods: [{
            HomeScore: 5,
            AwayScore: 4,
            PeriodType: {
                Value: PeriodType.Penalties,
                DisplayName: "penalties"
            },
            Number: 0
        }],
        HomeTeamName: "home team name",
        HomeRedCards: 1,
        HomeYellowRedCards: 0,
        EventStatus: {
          Value: MatchStatusType.CLOSED.value,
          DisplayName: MatchStatusType.CLOSED.displayName
        }
      }
    };

    const wrapper = shallow(<HomeTeam {...props} />);
    console.log(wrapper.html());
    expect(wrapper.find(".icon-penalty").length).toEqual(1);
  });

  
  it("should render aggregate icon when home team wins with aggregate score and the match is closed", () => {
    const props: any = {
      match: {
        MatchPeriods: [],
        HomeTeamName: "home team name",
        HomeTeamId: "home",
        HomeRedCards: 1,
        HomeYellowRedCards: 0,
        EventStatus: {
          Value: MatchStatusType.CLOSED.value,
          DisplayName: MatchStatusType.CLOSED.displayName
        },
        AggregateHomeScore: 1,
        AggregateAwayScore: 0,
        AggregateWinnerId: "home"
      }
    };

    const wrapper = shallow(<HomeTeam {...props} />);
    console.log(wrapper.html());
    expect(wrapper.find(".icon-arrow-right").length).toEqual(1);
  });
});
