import React from 'react';
import './Top.scss';
import Select from 'react-select';

const options = [
  { value: 'soccer', label: 'soccer' },
  { value: 'basketball', label: 'basketball' },
  { value: 'esport', label: 'esport' }
];

const customStyles = {
  menu: (provided: any, state: any) => ({
    ...provided,
    color: 'black'
  })
};

const onChangeSportMobile = () => {};

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
      <Select className="sport-dropdown" styles={customStyles} options={options} />
      <i className="icon-search" />
    </div>
  </>
);

export default Top;
