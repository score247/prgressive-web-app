import React, { CSSProperties } from "react";

type Props = {
  style?: CSSProperties;
};

export default function Ad(props: Props) {
  return (
    <div className="ad" style={props.style}>
      <img className="ads-img" src="/static/images/ads-banner-1.jpg" style={{width: "100%", maxHeight:"100%"}}/>
    </div>
  );
}
