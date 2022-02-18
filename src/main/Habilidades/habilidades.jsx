import React from "react";
import "./habilidades.css";
import "./habilidades-queries.css";
import { listaHabilidades } from "./arrayHabilidades";

export const Tecnologias = () => {
  return (
    <>
      <div id="habilidades" className="container-section-habilidades">
        <div className="mask-habilidades-1"></div>
        <h2>TECNOLOGÍAS</h2>
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
      <div className="contenedor-svg">
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
