import React from "react";

type Props = {
    children?: React.ReactNode;
    className?: string;
    onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    disabled?: boolean;
};

const Button: React.FunctionComponent<Props> = props => {
    return (
        <button className={props.className} onClick={props.onClick} disabled={props.disabled}>
            {props.children}
        </button>
    );
};

export default Button;