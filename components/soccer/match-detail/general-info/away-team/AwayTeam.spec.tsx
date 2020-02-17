import React from "react";
import { shallow } from "enzyme";
import { Props } from "./type";
import AwayTeam from "./index";
import { MatchStatusType } from "../../../../../common/enums/match-status-type";
import { PeriodType } from "../../../../../common/enums/period-type";

describe("AwayTeam", () => {
  it("should render yellow card when yellowCards > 0", () => {
    const props: any = {
      match: {
        MatchPeriods: [],
        AwayTeamName: "away team name",
        AwayYellowCards: 1,
        EventStatus: {
          Value: MatchStatusType.LIVE.value,
          DisplayName: MatchStatusType.LIVE.displayName
        }
      }
    };

    const wrapper = shallow(<AwayTeam {...props} />);
    expect(wrapper.find(".yellow-card").length).toEqual(1);
  });

  it("should render red card when redCards > 0", () => {
    const props: any = {
      match: {
        MatchPeriods: [],
        AwayTeamName: "away team name",
        AwayRedCards: 1,
        AwayYellowRedCards: 0,
        EventStatus: {
          Value: MatchStatusType.LIVE.value,
          DisplayName: MatchStatusType.LIVE.displayName
        }
      }
    };

    const wrapper = shallow(<AwayTeam {...props} />);
    console.log(wrapper.html());
    expect(wrapper.find(".red-card").length).toEqual(1);
  });

  it("should render penalty icon when away team wins penalty and the match is closed", () => {
    const props: any = {
      match: {
        MatchPeriods: [{
            AwayScore: 5,
            HomeScore: 4,
            PeriodType: {
                Value: PeriodType.Penalties,
                DisplayName: "penalties"
            },
            Number: 0
        }],
        AwayTeamName: "away team name",
        EventStatus: {
          Value: MatchStatusType.CLOSED.value,
          DisplayName: MatchStatusType.CLOSED.displayName
        }
      }
    };

    const wrapper = shallow(<AwayTeam {...props} />);
    console.log(wrapper.html());
    expect(wrapper.find(".icon-penalty").length).toEqual(1);
  });

  
  it("should render aggregate icon when away team wins with aggregate score and the match is closed", () => {
    const props: any = {
      match: {
        MatchPeriods: [],
        AwayTeamName: "away team name",
        AwayTeamId: "away",
        EventStatus: {
          Value: MatchStatusType.CLOSED.value,
          DisplayName: MatchStatusType.CLOSED.displayName
        },
        AggregateAwayScore: 1,
        AggregateHomeScore: 0,
        AggregateWinnerId: "away"
      }
    };

    const wrapper = shallow(<AwayTeam {...props} />);
    console.log(wrapper.html());
    expect(wrapper.find(".icon-arrow-right").length).toEqual(1);
  });
});
