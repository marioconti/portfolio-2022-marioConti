import React from "react";
import "./habilidades.css";
import "./habilidades-queries.css";
import { listaHabilidades } from "./arrayHabilidades";

export const Tecnologias = () => {
  return (
    <>
      <div id="habilidades" className="titulo-section">
        <div className="titulo-section-habilidades">
          <p>Tecnologías</p>
        </div>
      </div>
      <div className="section-habilidades">
        <ListadoHabilidades />
      </div>
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
      </div>
    </>
  );
};
