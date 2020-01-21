import React from "react";
import Advertisement from "../../advertisement";

type Props = {
  imgSrc: string;
  url: string;
};

const Banner: React.FunctionComponent<Props> = ({ imgSrc, url }) => (
  <div className="banner hide-mobile">
    <Advertisement href={url} imageSrc={imgSrc} />
  </div>
);

export default Banner;
