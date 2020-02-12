import React from "react";
import SearchBox from "../search-box";
import { SearchBarProps } from "../type";
import { WithTranslation } from "next-i18next";
import { withTranslation } from "../../../common/helpers/Localizer";
import { ResourceType, CommonResourceKey } from "../../../common/resources";

type Props = {
    onCancel: () => void;
} & SearchBarProps & WithTranslation;

const MobileSearchBar: React.FC<Props> = (props) => {
    const handleCancelClick = () => {
        props.onCancel();
    };

    return (
        <div className="search-section">
            <SearchBox {...props} />
            <span className="btn-cancel" onClick={handleCancelClick}>{props.t(CommonResourceKey.CANCEL)}</span>
        </div>
    );
};

export default withTranslation(ResourceType.COMMON)(MobileSearchBar);