import React from "react";
import Logo from "../../assets/image/Layouts/Footer/Logo.png";
import "./footer.css";

const Footer = () => {
  return (
    <div>
      <div className="footer">
        <img className="footerLogo" src={Logo} alt="logo Kasa" />
        <p className="copyright">© 2020 Kasa. All Rights reserved</p>
      </div>
    </div>
  );
};

export default Footer;
