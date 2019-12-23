import React from "react";
import "./Top.scss";
import Select, { ValueType } from "react-select";
import Router from "next/router";
import { SportsEnum } from "../../../../../common/enums/sportenum";
import { filter } from "lodash";

interface IProps {
  sport: string;
}

interface SelectOptions {
  value: string;
  label: string;
}

const createOptions = () => {
  const createdOptions = [];
  for (const item in SportsEnum) {
    createdOptions.push({
      value: `/${item.toLowerCase()}`,
      label: `${item}`
    });
  }
  return createdOptions;
};

const customStyles = {
  menu: (provided: any, state: any) => ({
    ...provided,
    color: "black"
  })
};

const onChangeSportMobile = (selectedOption: ValueType<SelectOptions>) => {
  const option = selectedOption as SelectOptions;
  Router.push(option.value);
};

const Top: React.FunctionComponent<IProps> = ({ sport }) => (
  <>
    <div className="header-top">
      <div className="container">
        <div className="logo">
          <img src="/static/images/Logo.png" alt="Logo" />
          <img className="logo-text" src="/static/images/SCORE247.png" alt="Logo" />
        </div>        
        <div className="user-languages">
          <div className="login">Login</div>
          <div className="login">Register</div>
        </div>
      </div>
    </div>
    <div className="header-top-mobile">
      <i className="icon-hambuger" />
      <Select
        className="sport-dropdown"
        styles={customStyles}
        options={createOptions()}
        value={filter(createOptions(), { value: `/${sport}` })}
        onChange={onChangeSportMobile}
      />
      <i className="icon-search" />
    </div>
  </>
);

export default Top;
