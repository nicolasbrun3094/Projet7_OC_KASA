import React from "react";
import "./error.css";

const Error = () => {
  return (
    <div className="error">
      <h1>404</h1>
      <p className="message">
        Oups, la page que vous demandez n'est pas disponible !
      </p>
      <a className="redirection" href="/home">
        Retourner sur la page d'accueil
      </a>
    </div>
  );
};

export default Error;
