import React from "react";
import { useParams } from "react-router-dom";
import "./housingTitle.css";
import housingData from "../../assets/api/housing.json";

const HousingTitle = () => {
  let { id } = useParams();
  const location = housingData.find((item) => item.id === id);
  const info = location.title;
  const departement = location.location;

  return (
    <div className="title-container">
      <div className="title">
        <h2>{info}</h2>
        <h3>{departement}</h3>
      </div>
    </div>
  );
};

export default HousingTitle;
