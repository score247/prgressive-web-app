import React from "react";
import { Props } from "./type";

export default function Advertisement(props: Props) {
  return (
    <div className="advertisement-wrapper" style={props.cssStyle}>
      <a href={props.href}>
      <img src={props.imageSrc} style={{width: "100%", maxHeight:"100%"}}/>
      </a>
    </div>
  );
}