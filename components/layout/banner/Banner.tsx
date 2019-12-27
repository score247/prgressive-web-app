import React from "react";

type Props = {
  imgSrc: string;
  url: string;
};

const Banner: React.FunctionComponent<Props> = ({ imgSrc, url }) => (
  <div className="banner hide-mobile">
    <a href={url}>
      <img src={imgSrc} alt="Logo" className="ads-img" />
    </a>
  </div>
);

export default Banner;
