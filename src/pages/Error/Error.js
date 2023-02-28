import React from "react";
import Logo from "../../components/Logo/Logo";
import Navigation from "../../components/Navigation/Navigation";
import Footer from "../../components/Footer/Footer";
import Error404 from "../../components/Error/Error";
import "./error.css";

const Error = () => {
  return (
    <div>
      <div className="header-container">
        <Logo />
        <Navigation />
      </div>
      <Error404 />
      <Footer />
    </div>
  );
};

export default Error;
