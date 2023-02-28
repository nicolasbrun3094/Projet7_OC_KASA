import React from "react";
import Logo from "../../components/Logo/Logo";
import Navigation from "../../components/Navigation/Navigation";
import Footer from "../../components/Footer/Footer";
import AboutBanner from "../../components/Banner-About/AboutBanner";
import Dropdown from "../../components/Dropdown/Dropdown";
import "./about.css";

const About = () => {
  return (
    <div>
      <div className="header-container">
        <Logo />
        <Navigation />
      </div>
      <AboutBanner />
      <div className="dropdown-container">
        <Dropdown
          title="Fiabilité"
          description="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes."
        />
        <Dropdown
          title="Respect"
          description="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
        />
        <Dropdown
          title="Service"
          description="Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."
        />
        <Dropdown
          title="Sécurité"
          description="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
        />
      </div>
      <Footer />
    </div>
  );
};

export default About;
