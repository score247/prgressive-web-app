import React from "react";
import "./Top.scss";
import Select, { ValueType } from "react-select";
import Router from "next/router";
import { SportsEnum } from "../../../../../common/sportenum";
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
        <img src="/static/images/Logo.png" alt="Logo" />
        <div className="user-languages">
          <div className="block languages">Languages</div>
          <div className="block login">Login/Register</div>
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
