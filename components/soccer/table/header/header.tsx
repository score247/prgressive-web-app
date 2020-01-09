import React from "react";
import { DeviceContext } from "../../../../contexts/device-context";

const renderFirstHalfColumn = () => (
  <DeviceContext.Consumer>
    {({ isMobile }) => {
      if (!isMobile) {
        return <th className="width-50">1st Half</th>;
      }
      return null;
    }}
  </DeviceContext.Consumer>
);

const renderFavoriteColumn = () => (
  <DeviceContext.Consumer>
    {({ isMobile }) => <th>{!isMobile && "favorite"}</th>}
  </DeviceContext.Consumer>
);

const Header = () => {
  return (
    <thead>
      <tr>
        <th></th>
        <th>League</th>
        <th>Time</th>
        <th>Status</th>
        <th>Home</th>
        <th>Score</th>
        <th>Away</th>
        {renderFirstHalfColumn()}
        {renderFavoriteColumn()}
      </tr>
    </thead>
  );
};

export default Header;
