/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import "./proyectos.css";

export const CardProyecto = ({ proyectos }) => {
  const {
    name,
    link,
    imagenMobile,
    imagenDesktop,
    descripcionUno,
    descripcionDos,
  } = proyectos;
  return (
    <div className="card-container">
      <div
        className="imagenes-proyecto"
        data-aos="fade-up"
        data-aos-offset="-300"
        data-aos-delay="0"
        data-aos-duration="2000"
        data-aos-easing="ease"
        data-aos-mirror="true"
        data-aos-once="true"
        data-aos-anchor-placement="top-center"
      >
        <img className="image-desktop" src={imagenDesktop} alt={name} />
        <img className="image-mobile" src={imagenMobile} alt={name} />
      </div>
      <div className="info-proyecto">
        <div
          className="nombre-proyecto"
          data-aos="fade-up"
          data-aos-offset="-300"
          data-aos-delay="0"
          data-aos-duration="1500"
          data-aos-easing="ease"
          data-aos-mirror="true"
          data-aos-once="true"
          data-aos-anchor-placement="top-center"
        >
          <h2 className="proyecto">{name}</h2>
        </div>
        <p
          className="descripcion-proyecto"
          data-aos="fade-right"
          data-aos-offset="-300"
          data-aos-delay="0"
          data-aos-duration="1500"
          data-aos-easing="ease"
          data-aos-mirror="true"
          data-aos-once="true"
          data-aos-anchor-placement="top-center"
        >
          {descripcionUno}
        </p>
        <p
          className="descripcion-proyecto descripcion-dos"
          data-aos="fade-left"
          data-aos-offset="-300"
          data-aos-delay="0"
          data-aos-duration="1500"
          data-aos-easing="ease"
          data-aos-mirror="true"
          data-aos-once="true"
          data-aos-anchor-placement="top-center"
        >
          {descripcionDos}
        </p>
        <a href={link} className="link-proyecto" target="_blank">
          VISITAR
        </a>
      </div>
    </div>
  );
};
