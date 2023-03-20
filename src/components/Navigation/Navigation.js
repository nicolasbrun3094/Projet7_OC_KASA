import React from "react";
import "./navigation.css";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="navigation">
      <ul className="navbar">
        <NavLink exact to="/home">
          <li>Accueil</li>
        </NavLink>
        <NavLink to="/about">
          <li>À Propos</li>
        </NavLink>
      </ul>
    </div>
  );
};

export default Navigation;
