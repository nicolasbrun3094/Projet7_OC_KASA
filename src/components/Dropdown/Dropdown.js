import React, { useState } from "react";
import "./dropdown.css";
import Arrow from "../../assets/image/Components/Dropdown/Fleche.svg";

function Dropdown({ title, description }) {
  /* Crée un Hook d'état */
  const [open, setOpen] = useState(false);

  return (
    /* Crée un dropdown */
    <div className="drop-container">
      <div className="dropdown" id={`dropdown-${title}`}>
        <div className="header-dropdown">
          <div className="title-dropdown">{title}</div>
          <span
            className={`arrow-dropdown ${open}`}
            onClick={() => setOpen(!open)}
          >
            <img src={Arrow} alt="Ouvrir cette liste" />
          </span>
        </div>
        {
          /* Si le dropdown est à TRUE alors il affichera la description */
          open && <div className="description-dropdown">{description}</div>
        }
      </div>
    </div>
  );
}

export default Dropdown;
