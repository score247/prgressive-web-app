import React from "react";
import { shallow, ShallowWrapper } from "enzyme";
import LeagueCell from "./index";

describe("<LeagueCell />", () => {
    let props: {
        match: any,
        rowSpan?: number
    };
    let wrapper: ShallowWrapper;

    beforeEach(() => {
        props = {
            match: {
                LeagueName: "abc",
                CountryCode: "abc",
                CountryName: "test",
                IsInternationalLeague: true,
                LeagueAbbreviation: "abc",
            },
            rowSpan: 1
        };
        wrapper = shallow(<LeagueCell {...props} />);
    });

    it("should render correctly", () => {
        expect(wrapper).toMatchSnapshot();
    });
});
