import React from "react";
type Props = {
    onClick: () => void;
};

export const Button: React.FunctionComponent<Props> = props => {
    const handleClick = () => {
        props.onClick();
    };

    return <input type="button" value="soccer" onClick={handleClick} />;
};