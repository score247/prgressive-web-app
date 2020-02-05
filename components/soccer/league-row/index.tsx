import React from "react";
import Checkbox from '../../checkbox';
import FavoriteCell from '../table/favorite-cell';

interface Props {
    isSelected: boolean;
    league: string;
    onSelect: (league: string) => void;
}

interface State {
    isSelected: boolean;
}

class LeagueRow extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);

        this.state = {
            isSelected: true
        };
    }

    handleSelectRow = () => {

    }

    render() {
        const { league, isSelected } = this.props;
        return (
            <div className="league-row" key={league}>
                <Checkbox id={league} checked={isSelected} value={league} onChange={() => this.props.onSelect(league)} />
                <span>{league}</span>
                <FavoriteCell />
            </div>
        );
    }
}

export default LeagueRow;