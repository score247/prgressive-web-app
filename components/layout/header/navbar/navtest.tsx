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
        <div className="loading-page">
            <div className="title">Score247 Official Website</div>
            <div className="note">You are using a smart device. Please select one of the following browsing mode that's compatible with your device</div>
            <div className="content">
                <button className="btn-mobile">Mobile website</button>
                <button className="btn-desktop">Desktop website</button>
                <div className="divide">or mobile application</div>
                <button className="btn-download">Download from app store</button>
                <div className="logo"></div>
            </div>
        </div>
    );
};

export default NavTest;
