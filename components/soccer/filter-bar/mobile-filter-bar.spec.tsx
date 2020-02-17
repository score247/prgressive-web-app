import * as React from "react";
import { shallow } from "enzyme";
import MobileFilterBar from "./mobile-filter-bar";
import { League } from '../filter-table/type';
import { SoccerSortOptions } from '../../../common/enums/soccer-sort-option';

type Props = {
    filterText: string;
    onFilterTextChange: (filterText: string) => void;
    onReset: () => void;
    placeHolder: string;
    sortByValue: number;
    onSortChange: (sortValue: number) => void;
    leagues: League[];
    selectedLeagues: string[];
    onSubmitFilterLeagues: (selectedLeagues: string[]) => void;
    onTogglePopup: () => void;
    isLeaguesFilteringPopupOpen: boolean;
}

describe("<MobileFilterBar />", () => {
    let props: Props;

    beforeEach(() => {
        props = {
            filterText: "abc",
            onFilterTextChange: jest.fn(),
            onReset: jest.fn(),
            placeHolder: "Search",
            onTogglePopup: jest.fn(),
            sortByValue: SoccerSortOptions.KICK_OFF_TIME,
            onSortChange: jest.fn(),
            leagues: [],
            selectedLeagues: [],
            onSubmitFilterLeagues: jest.fn(),
            isLeaguesFilteringPopupOpen: false
        };
    });

    it("should render correctly", () => {
        const wrapper = shallow(<MobileFilterBar {...props} />);
        expect(wrapper).toMatchSnapshot();
    });
});
