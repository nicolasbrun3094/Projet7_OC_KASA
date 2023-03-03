import React from "react";
import Logo from "../../components/Logo/Logo";
import Navigation from "../../components/Navigation/Navigation";
import Banner from "../../components/Banner/Banner";
import Thumbnail from "../../components/Thumbnail/Thumbnail";
import Footer from "../../components/Footer/Footer";
import BannerWall from "../../assets/image/Pages/Home/Banniere.png";
import "./home.css";

const Home = () => {
  return (
    <div>
      <div className="header-container">
        <Logo />
        <Navigation />
      </div>
      <Banner title="Chez vous, partout et ailleurs" image={BannerWall} />
      <Thumbnail />
      <Footer />
    </div>
  );
};

export default Home;
