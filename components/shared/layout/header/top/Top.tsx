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
  label: JSX.Element;
  forSport: string;
}

const createOptions = () => {
  const createdOptions = [];
  for (const item in SportsEnum) {
    const icon = `icon-${item.toLowerCase()}`;
    const labelWithIcon = (
      <span>
        <i className={icon} />
        {item}
      </span>
    );
    if (item.toLowerCase() === SportsEnum.SOCCER) {
      createdOptions.push({
        value: "/",
        label: labelWithIcon,
        forSport: item
      });
    } else {
      createdOptions.push({
        value: `/${item.toLowerCase()}`,
        label: labelWithIcon,
        forSport: item
      });
    }
  }
  return createdOptions;
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
          <div className="login">Languages</div>
          <div className="login">Login/Register</div>
        </div>
      </div>
    </div>
    <div className="header-top-mobile">
      <i className="icon-hambuger" />
      <Select
        instanceId={sport}
        className="sport-dropdown"
        classNamePrefix="select"
        options={createOptions()}
        value={filter(createOptions(), { forSport: `${sport.toUpperCase()}` })}
        onChange={onChangeSportMobile}
        //menuIsOpen
      />
      <i className="icon-search" />
    </div>
  </>
);

export default Top;
