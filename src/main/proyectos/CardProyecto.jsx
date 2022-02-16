/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import "./proyectos.css";

export const CardProyecto = ({ proyectos }) => {
  const { name, link, imagenMobile, imagenDesktop, descripcion } = proyectos;
  return (
    <div className="card-container">
      <div className="imagenes-proyecto">
        <img className="image-desktop" src={imagenDesktop} alt={name} />
        <img className="image-mobile" src={imagenMobile} alt={name} />
        <div className="info-proyecto">
          <div className="nombre-proyecto">{name}</div>
          <p className="descripcion-proyecto">{descripcion}</p>
        </div>
      </div>
        <a href={link} className="link-proyecto" target="_blank">
          Visitar el proyecto
        </a>
    </div>
  );
};
