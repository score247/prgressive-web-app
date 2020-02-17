import React from "react";
import { shallow } from "enzyme";
import ExtraMatchInfoRow from "./index";
import { MatchStatusType } from "../../../../common/enums/match-status-type";
import { PeriodType } from "../../../../common/enums/period-type";

describe("ExtraMatchInfoRow", () => {
  it("should render correctly", () => {
    const props: any = {
      match: {
        AggregateAwayScore: 1,
        AggregateHomeScore: 1,
        MatchStatus: {
          Value: 1,
          DisplayName: "string"
        },
        MatchPeriods: [
          {
            HomeScore: 1,
            AwayScore: 1,
            PeriodType: {
              DisplayName: "regular",
              Value: PeriodType.Regular
            },
            Number: 1
          },
          {
            HomeScore: 0,
            AwayScore: 0,
            PeriodType: {
              DisplayName: "regular",
              Value: PeriodType.Regular
            },
            Number: 2
          },
          {
            HomeScore: 0,
            AwayScore: 0,
            PeriodType: {
              DisplayName: "Overtime",
              Value: PeriodType.Overtime
            },
            Number: 0
          },
          {
            HomeScore: 4,
            AwayScore: 3,
            PeriodType: {
              DisplayName: "Penalties",
              Value: PeriodType.Penalties
            },
            Number: 0
          }
        ],
        AggregateWinnerId: "A",
        EventStatus: {
          Value: MatchStatusType.AWAITING_EXTRA_TIME.value,
          DisplayName: MatchStatusType.AWAITING_EXTRA_TIME.displayName
        }
      }
    };
    const wrapper = shallow(<ExtraMatchInfoRow {...props} />);
    expect(wrapper).toMatchSnapshot();
  });

  it("should render correctly", () => {
    const props: any = {
      match: {
        AggregateAwayScore: 1,
        AggregateHomeScore: 1,
        MatchStatus: {
          Value: 1,
          DisplayName: "string"
        },
        MatchPeriods: [
          {
            HomeScore: 0,
            AwayScore: 0,
            PeriodType: {
              DisplayName: "Overtime",
              Value: PeriodType.Penalties
            },
            Number: 0
          }
        ],
        EventStatus: {
          Value: MatchStatusType.AWAITING_PENALTIES.value,
          DisplayName: MatchStatusType.AWAITING_PENALTIES.displayName
        }
      }
    };

    const wrapper = shallow(<ExtraMatchInfoRow {...props} />);
    expect(wrapper).toMatchSnapshot();
  });

  it("should render correctly", () => {
    const props: any = {
      match: {
        AggregateAwayScore: 1,
        AggregateHomeScore: 1,
        MatchPeriods: [{
          HomeScore: 0,
          AwayScore: 0,
          PeriodType: {
            DisplayName: "Overtime",
            Value: PeriodType.Penalties
          },
          Number: 0
        }],
        AggregateWinnerId: "A",
        EventStatus: {
          Value: MatchStatusType.CLOSED.value,
          DisplayName: MatchStatusType.CLOSED.displayName
        }
      }
    };

    const wrapper = shallow(<ExtraMatchInfoRow {...props} />);
    expect(wrapper).toMatchSnapshot();
  });

  it("should render correctly", () => {
    const props: any = {
      match: {
        AggregateAwayScore: 1,
        AggregateHomeScore: 1,
        MatchPeriods: null
      }
    };

    const wrapper = shallow(<ExtraMatchInfoRow {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
