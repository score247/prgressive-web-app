import React from "react";
import { MatchSummary } from "../../../models";
import { SoccerSortOptions } from "../../../common/enums/soccer-sort-option";
import { sortArray } from "../../../common/utils/sort";

const SoccerFilterContext = React.createContext<SoccerFilterContextType>({
    filterText: "",
    sortOption: SoccerSortOptions.KICK_OFF_TIME,
    sortedMatches: []
});

export const SoccerFilterConsumer = SoccerFilterContext.Consumer;

type State = {
    filterText: string;
    sortOption: number;
};

type Props = {
    matches: MatchSummary[]
};

export type SoccerFilterContextType = {
    sortedMatches: MatchSummary[]
    onFilterTextChange?: (filterText: string) => void;
    onResetFilterText?: () => void;
    onSortOptionChange?: (sortOption: number) => void;
} & State;

export class SoccerFilterProvider extends React.Component<Props, State> {
    private readonly defaultSortProperty = "EventDate";
    private readonly defaultState = {
        filterText: "",
        sortOption: SoccerSortOptions.KICK_OFF_TIME
    };

    constructor(props: Props) {
        super(props);
        this.state = this.defaultState;
    }

    resetState() {
        this.setState(this.defaultState);
    }

    filterAndSort(matches: MatchSummary[], filterText = "", sortOption = SoccerSortOptions.KICK_OFF_TIME) {
        const filteredMatches = this.applyFilter(matches, filterText);
        const sortedMatches = this.applySort(filteredMatches, sortOption);

        return sortedMatches;
    }

    applyFilter(matches: MatchSummary[], filterText: string) {
        const filteredMatches = matches.filter(
            match => match.HomeTeamName?.toLowerCase().search(filterText.toLowerCase()) !== -1
                || match.AwayTeamName?.toLowerCase().search(filterText.toLowerCase()) !== -1
        );

        return filteredMatches;
    }


    applySort(matches: MatchSummary[], sortOption = SoccerSortOptions.KICK_OFF_TIME) {
        const sortedMatches = sortOption === SoccerSortOptions.LEAGUE
            ? matches
            : sortArray(matches, this.defaultSortProperty);

        return sortedMatches;
    }

    shouldComponentUpdate(nextProps: Props, nextState: State) {
        return this.props.matches !== nextProps.matches || this.state !== nextState;
    }

    handleFilterTextChange = (filterText: string) => {
        this.setState({ filterText: filterText });
    };

    handleResetFilterText = () => {
        const filterText = "";
        this.setState({ filterText });
    }

    handleSortOptionChange = (sortOption: number) => {
        this.setState({ sortOption });
    };

    render() {
        const { matches } = this.props;
        const { filterText, sortOption } = this.state;
        const sortedMatches = this.filterAndSort(matches, filterText, sortOption);
        return (
            <SoccerFilterContext.Provider
                value={{
                    ...this.state,
                    sortedMatches: sortedMatches,
                    onFilterTextChange: this.handleFilterTextChange,
                    onResetFilterText: this.handleResetFilterText,
                    onSortOptionChange: this.handleSortOptionChange
                }}
            >
                {this.props.children}
            </SoccerFilterContext.Provider>
        );
    }
}