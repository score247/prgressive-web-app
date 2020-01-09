import React from "react";
import { DeviceContextConsumer } from "../../../../contexts/device-context";

const Header = () => {
  return (
    <DeviceContextConsumer>
      {({ isMobile }) => (
        <thead>
          <tr>
            {!isMobile && <th></th>}
            <th>League</th>
            <th>Time</th>
            {!isMobile && <th>Status</th>}
            <th>Home</th>
            <th>Score</th>
            <th>Away</th>
            {!isMobile && <th className="width-50">1st Half</th>}
            <th>{!isMobile && "favorite"}</th>
          </tr>
        </thead>
      )}
    </DeviceContextConsumer>
  );
};

export default Header;
