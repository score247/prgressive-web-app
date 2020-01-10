import React from "react";
import Advertisement from "../../../advertisement";
import { DeviceContext } from "../../../../contexts/device-context";
import { Props } from "./type";

export default function AdvertisementRow(props: Props) {
  const { isMobile } = React.useContext(DeviceContext);
  const colSpan = isMobile ? 6 : 9; //NOSONAR
  const { href, imageSrc, ...rest } = props;

  return (
    <tr {...rest}>
      <td colSpan={colSpan}>
        <Advertisement href={href} imageSrc={imageSrc} />
      </td>
    </tr>
  );
}
