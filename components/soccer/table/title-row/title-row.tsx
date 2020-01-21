import React from "react";
import { DeviceContextConsumer } from "../../../../contexts/device-context";
import { DeviceContextType } from "../../../../contexts/device-context-type";
import "./title-row.scss";

type Props = {
  title: string;
  className: string;
};

const TitleRow: React.FC<Props> = (props) => {
  const mobileColSpan = 8;
  const desktopColSpan = 9;

  const titleRow = ({ isMobile }: DeviceContextType) => {
    const colSpan = isMobile ? mobileColSpan : desktopColSpan;

    return (
      <tr>
        <td className={props.className} colSpan={colSpan}>
          {props.title}
        </td>
      </tr>
    );
  };

  return <DeviceContextConsumer>{titleRow}</DeviceContextConsumer>;
};

export default TitleRow;
