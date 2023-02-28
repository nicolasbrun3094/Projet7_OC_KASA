import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import housingData from "../../assets/api/housing.json";
import "./host.css";

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
`;

const Host = () => {
  const { id } = useParams();

  // Chercher l'objet avec l'id correspondant
  const location = housingData.find((item) => item.id === id);
  const name = location.host.name;
  const hosting = location.host.picture;
  const fullName = name.split(" ");

  return (
    <div className="hosting-container">
      <div className="name-container">
        <h3>{fullName[0]}</h3>
        <h3>{fullName[1]}</h3>
      </div>
      <div className="hosting">
        <Image src={hosting} alt="photo de profil" />
      </div>
    </div>
  );
};

export default Host;
