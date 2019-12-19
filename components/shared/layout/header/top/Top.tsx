import React from "react";
import "./top.scss";

const Top = () => (
  <div className="header-top">
    <div className="container">
      <img src="/static/images/Logo.png" alt="Logo" />
      <div className="user-languages">
        <div className="block languages">Languages</div>
        <div className="block login">Login/Register</div>
      </div>
    </div>
  </div>
);

export default Top;
