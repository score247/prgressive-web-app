import * as React from "react";
import { shallow } from "enzyme";
import SoccerFilterBar from "./index";
import { DisplayMode } from '../../../common/constants';
import { League } from '../filter-table/type';
import { SoccerSortOptions } from '../../../common/enums/soccer-sort-option';

type Props = {
    onDisplayModeChange: (mode: DisplayMode) => void;
    sortByValue: number;
    onSortChange: (sortValue: number) => void;
    filterText: string;
    onResetFilterText: () => void;
    onFilterTextChange: (filterText: string) => void;
    leagues: League[];
    selectedLeagues: string[];
    onSubmitFilterLeagues: (selectedLeagues: string[]) => void;
}

describe("<SoccerFilterBar />", () => {
    let props: Props;

    beforeEach(() => {
        props = {
            filterText: "abc",
            onFilterTextChange: jest.fn(),
            onResetFilterText: jest.fn(),
            onDisplayModeChange: jest.fn(),
            sortByValue: SoccerSortOptions.KICK_OFF_TIME,
            onSortChange: jest.fn(),
            leagues: [],
            selectedLeagues: [],
            onSubmitFilterLeagues: jest.fn(),
        };
    });

    it("should render correctly", () => {
        const wrapper = shallow(<SoccerFilterBar {...props} />);
        expect(wrapper).toMatchSnapshot();
    });
});
