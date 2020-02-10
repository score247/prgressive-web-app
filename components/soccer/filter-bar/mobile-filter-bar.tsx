import React from "react";
import SearchBar from "../../search-bar";
import { SearchBarProps } from "../../search-bar/type";
import MobileSearchBar from "../../search-bar/mobile";

type State = {
    openSearch: boolean;
};

export default class MobileFilterBar extends React.Component<SearchBarProps, State> {
    constructor(props: SearchBarProps) {
        super(props);
        this.state = {
            openSearch: false
        };
    }

    handleSearchClick = () => {
        const { openSearch } = this.state;
        this.setState({ openSearch: !openSearch });
        if (openSearch) {
            this.props.onReset();
        }
    }

    handleCancelClick = () => {
        this.setState({ openSearch: false });
        this.props.onReset();
    }

    render() {
        return (
            <>
                <div className="search-filter">
                    <span className="icon-search" onClick={this.handleSearchClick}></span>
                    <span className="icon-close"></span>
                </div>
                {this.state.openSearch && <MobileSearchBar {...this.props} onCancel={this.handleCancelClick} />}
            </>
        );
    }
}