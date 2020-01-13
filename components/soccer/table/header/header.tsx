import React from "react";
import { DeviceContextConsumer } from "../../../../contexts/device-context";

const Header = () => {
  const mobileHeader = () => (
    <thead>
      <tr>
        <th>League</th>
        <th>Time</th>
        <th>Home</th>
        <th>Score</th>
        <th>Away</th>
        <th></th>
      </tr>
    </thead>
  );

  const desktopHeader = () => (
    <thead>
      <tr>
        <th></th>
        <th>League</th>
        <th>Time</th>
        <th>Status</th>
        <th>Home</th>
        <th>Score</th>
        <th>Away</th>
        <th className="width-50">1H</th>
        <th></th>
      </tr>
    </thead>
  );

  return (
    <DeviceContextConsumer>
      {({ isMobile }) => (isMobile ? mobileHeader() : desktopHeader())}
    </DeviceContextConsumer>
  );
};

export default Header;
