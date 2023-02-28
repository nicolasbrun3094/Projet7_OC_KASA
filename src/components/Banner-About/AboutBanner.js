import React from "react";
import BannerWall from "../../assets/image/Pages/About/Banniere.png";
import "./AboutBanner.css";

const AboutBanner = () => {
  return (
    <div className="banner about-banner">
      <img className="banner-img " src={BannerWall} alt="Bannière" />
    </div>
  );
};

export default AboutBanner;
