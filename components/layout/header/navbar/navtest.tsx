import React from "react";
import "./Navbar.scss";

interface IProps {
    onClick: () => void;
}

const NavTest: React.FunctionComponent<IProps> = (props) => {

    const handleClick = () => {
        props.onClick();
    }

    return (
        <input type="button" value="soccer" onClick={handleClick} />
    );
};

export default NavTest;
