import React from "react";
import "./banner.css";

const Banner = ({ title, image }) => {
  return (
    <div className="banner">
      <img className="banner-img home-banner" src={image} alt="Bannière" />
      <span className="banner-txt">{title}</span>
    </div>
  );
};

export default Banner;
