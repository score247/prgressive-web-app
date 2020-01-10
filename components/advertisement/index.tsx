import React from "react";
import { Props } from "./type";

export default function Advertisement(props: Props) {
  return (
    <div className="ad" style={props.style}>
      <a href={props.href}>
      <img className="ads-img" src={props.imageSrc} style={{width: "100%", maxHeight:"100%"}}/>
      </a>
    </div>
  );
}