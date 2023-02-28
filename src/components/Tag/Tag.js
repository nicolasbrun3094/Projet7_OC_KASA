import React from "react";
import { useParams } from "react-router-dom";
import housingData from "../../assets/api/housing.json";
import "./tag.css";

const Tag = () => {
  let { id } = useParams();
  const location = housingData.find((item) => item.id === id);
  const tags = location.tags;

  // utiliser map pour afficher chaque élément dans le tableau des tags
  const tagElements = tags.map((tag, index) => (
    <div key={index} className="tag">
      <div className="tag-text">{tag}</div>
    </div>
  ));

  return <div className="tag-container">{tagElements}</div>;
};

export default Tag;
