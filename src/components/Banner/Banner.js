import React from "react";
import BannerWall from "../../assets/image/Pages/Home/Banniere.png";
import "./banner.css";

const Banner = () => {
  return (
    <div className="banner">
      <img className="banner-img home-banner" src={BannerWall} alt="Bannière" />
      <span className="banner-txt">Chez vous, partout et ailleurs</span>
    </div>
  );
};

export default Banner;
