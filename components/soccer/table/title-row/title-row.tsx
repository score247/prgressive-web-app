import React from "react";
import { DeviceContextConsumer } from "../../../../contexts/device-context";

const TitleRow: React.FC<{ title: string }> = ({ title }) => {
  const mobileColSpan = 8;
  const desktopColSpan = 9;

  const titleRow = ({ isMobile }: { isMobile: boolean }) => {
    const colSpan = isMobile ? mobileColSpan : desktopColSpan;

    return (
      <tr>
        <td className="latest-title" colSpan={colSpan}>
          {title}
        </td>
      </tr>
    );
  };

  return <DeviceContextConsumer>{titleRow}</DeviceContextConsumer>;
};

export default TitleRow;
