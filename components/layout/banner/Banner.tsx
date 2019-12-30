import React from "react";

type Props = {
  imgSrc: string;
  url: string;
};

const Banner: React.FunctionComponent<Props> = ({ imgSrc, url }) => (
  <div className="banner hide-mobile">
    <a href={url}>
      <picture>
        <source srcSet={`${imgSrc}.webp`} type="image/webp" />
        <source srcSet={`${imgSrc}.jpg`} type="image/jpeg" />
        <img className="ads-img" src={`${imgSrc}.jpg`} alt="Alt Text!" />
      </picture>
    </a>
  </div>
);

export default Banner;
