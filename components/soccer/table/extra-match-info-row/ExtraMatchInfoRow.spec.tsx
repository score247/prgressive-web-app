import React from "react";
import { shallow } from "enzyme";
import { Props } from "./type";
import ExtraMatchInfoRow from "./index";
import { MatchStatusType } from "../../../../common/enums/match-status-type";
import { PeriodType } from "../../../../common/enums/period-type";
describe("ExtraMatchInfoRow", () => {
  it("should render correctly", () => {
    const props: any = {
      match: {
        AggregateAwayScore: 1,
        AggregateHomeScore: 1,
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
          Value: MatchStatusType.CLOSED.value,
          DisplayName: MatchStatusType.CLOSED.displayName
        }
      }
    };

    const wrapper = shallow(<ExtraMatchInfoRow {...props} />);
    expect(wrapper)
  });
});
