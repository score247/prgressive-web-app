import React from "react";
type Props = {
    text: string;
    onClick: () => void;
};

const Button: React.FunctionComponent<Props> = props => {
    const handleClick = () => {
        props.onClick();
    };

    return <input type="button" value={props.text} onClick={handleClick} />;
};

export default Button;