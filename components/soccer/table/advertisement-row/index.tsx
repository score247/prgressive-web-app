import React from "react";
import Advertisement from "../../../common/advertisement";
import { useDeviceContext } from "../../../../contexts/device-context";
import { Props } from "./type";
import "./style.scss";

export default function AdvertisementRow(props: Props) {
  const { isMobile } = useDeviceContext();
  const colSpan = isMobile ? 6 : 9; //NOSONAR
  const { href, imageSrc, ...rest } = props;

  return (
    <tr {...rest}>
      <td colSpan={colSpan} className="advertisement-row">
        <Advertisement href={href} imageSrc={imageSrc} />
      </td>
    </tr>
  );
}
