/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import "./proyectos.css";

export const CardProyecto = ({ proyectos }) => {
  const { name, link, imagenMobile, imagenDesktop, descripcionUno, descripcionDos } = proyectos;
  return (
    <div className="card-container">
      <div className="imagenes-proyecto">
        <img className="image-desktop" src={imagenDesktop} alt={name} />
        <img className="image-mobile" src={imagenMobile} alt={name} />
      </div>
      <div className="info-proyecto">
        <div className="nombre-proyecto">
          <h2 className="proyecto">{name}</h2>
        </div>
        <p className="descripcion-proyecto">{descripcionUno}</p>
        <p className="descripcion-proyecto descripcion-dos">{descripcionDos}</p>
        <a href={link} className="link-proyecto" target="_blank">
          VISITAR PROYECTO
        </a>
      </div>
    </div>
  );
};
