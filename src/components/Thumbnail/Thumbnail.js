import React from "react";
import { Link } from "react-router-dom";
import "./thumbnail.css";
import HousingList from "../../assets/api/housing.json";

const Thumbnail = () => {
  return (
    <>
      <div className="container">
        {HousingList.map((housing, index) => {
          let background = housing.cover;
          return (
            <div key={index} className="bgLocation">
              <Link
                to={`/housingRecord/${housing.id}`}
                style={{ textDecoration: "none" }}
              >
                <div
                  className="card"
                  style={{ background: `url(${background})` }}
                >
                  <div className="space"></div>
                  <p className="text">{housing.title}</p>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Thumbnail;
