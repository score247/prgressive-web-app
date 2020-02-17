import React from "react";
import { shallow, ShallowWrapper, mount } from "enzyme";
import SoccerRow from "./index";
import { PeriodType } from '../../../../common/enums/period-type';
import { MatchStatusType } from '../../../../common/enums/match-status-type';

declare global {
    namespace NodeJS {
        interface Global {
            document: Document;
            window: Window;
            navigator: Navigator;
        }
    }
}

describe("<SoccerRow />", () => {
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
        },
        isSelected: true,
        onSelect: jest.fn()
    };
    let wrapper: ShallowWrapper;

    beforeEach(() => {
        wrapper = shallow(<SoccerRow {...props} />);
    });

    it("should render correctly", () => {
        expect(wrapper).toMatchSnapshot();
    });

    it("should open new window when clicking row", () => {
        const globalAny: any = global;
        const preventDefault = jest.fn();
        globalAny.open = jest.fn();
        wrapper.find(".match-row").simulate("click", { preventDefault });
        expect(globalAny.open).toBeCalled();
    });
});
