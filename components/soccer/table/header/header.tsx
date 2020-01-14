import React from "react";
import { DeviceContextConsumer } from "../../../../contexts/device-context";
import { DeviceContextType } from "../../../../contexts/device-context-type";
import "./header.scss";

const Header = () => {
  const header = ({ isMobile }: DeviceContextType) => (
    <thead>
      <tr>
        {!isMobile && <th></th>}
        <th>League</th>
        <th>Time</th>
        {!isMobile && <th>Status</th>}
        <th>Home</th>
        <th>Score</th>
        <th>Away</th>
        {!isMobile && <th className="width-50">1H</th>}
        <th></th>
      </tr>
    </thead>
  );

  return <DeviceContextConsumer>{header}</DeviceContextConsumer>;
};

export default Header;
