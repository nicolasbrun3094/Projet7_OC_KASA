import React from "react";
import { useParams } from "react-router-dom";
import "./star.css";
import Etoile from "../../assets/image/Pages/Housing-record/Etoile.png";
import EtoileVide from "../../assets/image/Pages/Housing-record/EtoileVide.png";
import housingData from "../../assets/api/housing.json";

const Star = () => {
  let { id } = useParams();
  const location = housingData.find((item) => item.id === id);
  let rating = 5;
  let note = location.rating;
  let stars = [];

  for (let i = 1; i <= rating; i++) {
    if (i <= note) {
      stars.push(<img key={i} src={Etoile} alt="star" className="star" />);
    } else {
      stars.push(
        <img key={i} src={EtoileVide} alt="empty star" className="star" />
      );
    }
  }

  return (
    <div className="rating-container">
      <div className="rating">{stars}</div>
    </div>
  );
};

export default Star;
