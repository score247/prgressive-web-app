import React, { CSSProperties } from "react";

type Props = {
  style?: CSSProperties;
};

export default function Ad(props: Props) {
  return (
    <div style={props.style}>
      BK8 - Situs resmi taruhan online | Welcome Bonus 100% | Cash Rebate 1.1%
    </div>
  );
}
