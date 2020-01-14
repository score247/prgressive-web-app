import React from "react";
import { DeviceContextConsumer } from "../../../../contexts/device-context";

const Header = () => {
  const header = ({ isMobile }: { isMobile: boolean }) => (
    <thead>
      <tr>
        {!isMobile && <th></th>}
        <th>League</th>
        <th>Time</th>
        <th>Status</th>
        <th>Home</th>
        <th>Score</th>
        <th>Away</th>
        {!isMobile && (
          <>
            <th className="width-50">1H</th>
            <th></th>
          </>
        )}
      </tr>
    </thead>
  );

  return <DeviceContextConsumer>{header}</DeviceContextConsumer>;
};

export default Header;
