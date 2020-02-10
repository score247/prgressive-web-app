import React from "react";
import SearchBox from "../search-box";
import { SearchBarProps } from "../type";

type Props = {
    onCancel: () => void;
} & SearchBarProps;

const MobileSearchBar: React.FC<Props> = (props) => {
    const handleCancelClick = () => {
        props.onCancel();
    };

    return (
        <div className="search-section">
            <SearchBox {...props} />
            <span className="btn-cancel" onClick={handleCancelClick}>Cancel</span>
        </div>
    );
}

export default MobileSearchBar;