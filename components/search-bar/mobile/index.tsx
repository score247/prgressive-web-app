import React from "react";
import SearchBox from "../search-box";
import { SearchBarProps } from "../type";
import { WithTranslation } from "next-i18next";
import { withTranslation } from "../../../common/helpers/Localizer";
import { ResourceType, CommonResourceKey } from "../../../common/resources";

type Props = {
    onCancel: () => void;
} & SearchBarProps & WithTranslation;

class MobileSearchBar extends React.Component<Props> {
    searchBoxRef: React.RefObject<SearchBox>;

    constructor(props: Props) {
        super(props);

        this.searchBoxRef = React.createRef<SearchBox>();
    }

    componentDidMount() {
        this.searchBoxRef.current?.focus();
    }

    render() {
        return (
            <div className="search-section">
                <SearchBox {...this.props} ref={this.searchBoxRef} />
                <span className="btn-cancel" onClick={this.props.onCancel}>{this.props.t(CommonResourceKey.CANCEL)}</span>
            </div>
        );
    }
}

export default withTranslation(ResourceType.COMMON)(MobileSearchBar);