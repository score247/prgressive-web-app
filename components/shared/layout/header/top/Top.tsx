import React from "react";
import "./Top.scss";

const Top = () => (
  <>
    <div className="header-top">
      <div className="container">
        <img src="/static/images/Logo.png" alt="Logo" />
        <div className="user-languages">
          <div className="block languages">Languages</div>
          <div className="block login">Login/Register</div>
        </div>
      </div>
    </div>
    <div className="header-top-mobile">
      <i className="icon-hambuger" />
      <span>Soccer</span>
      <i className="icon-search" />
    </div>
  </>
);

export default Top;
