import React from "react";
import { useParams, Navigate } from "react-router-dom";
import housingData from "../../assets/api/housing.json";
import Logo from "../../components/Logo/Logo";
import Navigation from "../../components/Navigation/Navigation";
import Carousel from "../../components/Carousel/Carousel";
import HousingTitle from "../../components/Housing-Title/HousingTitle";
import Dropdown from "../../components/Dropdown/Dropdown";
import Host from "../../components/Host/Host";
import Star from "../../components/Star/Star";
import Tag from "../../components/Tag/Tag";
import Footer from "../../components/Footer/Footer";
import "./housingRecord.css";

const HousingRecord = () => {
  let { id } = useParams();
  const location = housingData.find((item) => item.id === id);
  if (!location) {
    return <Navigate to="/error" replace />;
  }
  const equipments = location.equipments;
  const description = location.description;

  return (
    <div>
      <Logo />
      <Navigation />
      <Carousel />
      <div className="information-container">
        <div className="right-information">
          <HousingTitle />
          <Tag />
        </div>
        <div className="left-information">
          <Star />
          <Host />
        </div>
      </div>
      <div className="collapse">
        <Dropdown title="Description" description={description} />
        <Dropdown
          title="Équipements"
          description={equipments.map((eq) => (
            <li>{eq}</li>
          ))}
        />
      </div>
      <Footer />
    </div>
  );
};

export default HousingRecord;
