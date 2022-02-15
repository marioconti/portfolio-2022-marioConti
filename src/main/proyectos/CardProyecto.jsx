import React from "react";
import "./proyectos.css";

export const CardProyecto = ({ proyectos }) => {
  const { name, link, imagenMobile, imagenDesktop } = proyectos;
  return (
    <div className="card-container">
      <div className="imagenes-proyecto">
        <img className="image-desktop" src={imagenDesktop} alt={name} />
        <img className="image-mobile" src={imagenMobile} alt={name} />
        <div className="info-proyecto">
          <a href={link} className="nombre-proyecto" target="_blank">
            {name}
          </a>
        </div>
      </div>
      <div className="tecnologias-container">
        {/* {proyectos.map(({tecnologias}) => {
          return <div className="tecnologias-map">{tecnologias}</div>;
        })} */}
      </div>
    </div>
  );
};
