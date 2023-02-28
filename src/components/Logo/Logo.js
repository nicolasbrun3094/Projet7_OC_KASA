import React from "react";
import "./logo.css";
import LogoHeader from "../../../src/assets/image/Logo.png";

const Logo = () => {
  return (
    <div className="logo">
      {/* Les images importées depuis la balise IMG sont accessibles dans "public" */}
      <img src={LogoHeader} alt="logo Kasa" />
    </div>
  );
};

export default Logo;
