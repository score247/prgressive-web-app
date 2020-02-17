import React from "react";
import { shallow, ShallowWrapper, render } from "enzyme";
import TimeAndStatusCell from "./index";
import { PeriodType } from '../../../../common/enums/period-type';
import { MatchStatusType } from '../../../../common/enums/match-status-type';
import { DeviceContext } from '../../../../contexts/device-context';

describe("<TimeAndStatusCell />", () => {
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
                },
                EventDate: [new Date]
            },
            rowSpan: 1
        };

        const wrapper = shallow(<TimeAndStatusCell {...props} />);
        expect(wrapper).toMatchSnapshot();
    });

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
                    Value: MatchStatusType.AWAITING_EXTRA_TIME.value,
                    DisplayName: MatchStatusType.AWAITING_EXTRA_TIME.displayName
                },
                EventDate: [new Date]
            },
            rowSpan: 1
        };

        const wrapper = shallow(<TimeAndStatusCell {...props} />);
        expect(wrapper).toMatchSnapshot();
    });


    it("should have match-status class when on mobile", () => {
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
                },
                EventDate: [new Date]
            },
            rowSpan: 1
        };

        const wrapper = render(<DeviceContext.Provider value={{ isMobile: true }}>
            <TimeAndStatusCell {...props} />
        </DeviceContext.Provider>);
        expect(wrapper.hasClass("match-status")).toBeFalsy();
    });
});
