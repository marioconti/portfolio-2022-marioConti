import React from "react";
import "./habilidades.css";
import "./habilidades-queries.css";
import { listaHabilidades } from "./arrayHabilidades";

export const Tecnologias = () => {
  return (
    <>
      <div id="habilidades" className="container-section-habilidades">
        <div className="mask-habilidades-1"></div>
        <h2
          data-aos="fade-up"
          data-aos-offset="-200"
          data-aos-delay="0"
          data-aos-duration="1000"
          data-aos-easing="ease"
          data-aos-mirror="true"
          data-aos-once="true"
          data-aos-anchor-placement="top-center"
        >
          TECNOLOGÍAS
        </h2>
        <div className="section-habilidades">
          <ListadoHabilidades />
        </div>
      </div>{" "}
    </>
  );
};

const ListadoHabilidades = () => {
  const listadoDeHabilidades = listaHabilidades.map((svg) => {
    return (
      <div className="listado-tecnologias" key={svg.nameHabilidad}>
        <CardHabilidad
          data-aos="fade-up"
          data-aos-offset="-200"
          data-aos-delay="0"
          data-aos-duration="1000"
          data-aos-easing="ease"
          data-aos-mirror="true"
          data-aos-once="true"
          data-aos-anchor-placement="top-center"
          nameHabilidad={svg.nameHabilidad}
          imagenHabilidad={svg.imagenHabilidad}
        />
      </div>
    );
  });
  return listadoDeHabilidades;
};

const CardHabilidad = ({ imagenHabilidad, nameHabilidad }) => {
  return (
    <>
      <div
        className="contenedor-svg"
        data-aos="fade-up"
        data-aos-offset="-200"
        data-aos-delay="0"
        data-aos-duration="1500"
        data-aos-easing="ease"
        data-aos-mirror="true"
        data-aos-once="true"
        data-aos-anchor-placement="top-center"
      >
        <img
          className="image-habilidad"
          src={imagenHabilidad}
          alt={nameHabilidad}
          title={nameHabilidad}
        />
        <h3>{nameHabilidad}</h3>
      </div>
    </>
  );
};
