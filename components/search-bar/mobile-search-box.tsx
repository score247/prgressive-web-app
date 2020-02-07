import React from "react";
import { SearchBarProps } from "./type";
import SearchBox from "./search-box";

type State = {
    openSearch: boolean;
};

class MobileSearchBox extends React.Component<SearchBarProps, State> {
    constructor(props: SearchBarProps) {
        super(props);

        this.state = {
            openSearch: false
        };
    }

    handleCancelClick = () => {
        this.setState({ openSearch: false });
    };

    handleSearchClick = () => {
        this.setState({ openSearch: true });
    };

    render() {
        const { openSearch } = this.state;

        return (
            <div className="search-section">
                {openSearch
                    ? (<><SearchBox {...this.props} /><span className="btn-cancel" onClick={this.handleCancelClick}>Cancel</span></>)
                    : <span className="icon-search" onClick={this.handleSearchClick}></span>
                }
            </div>
        );
    }
}

export default MobileSearchBox;