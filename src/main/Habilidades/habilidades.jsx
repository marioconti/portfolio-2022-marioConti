import React from "react";
import "./habilidades.css";
import "./habilidades-queries.css";
import { listaHabilidades } from "./arrayHabilidades";

export const Tecnologias = () => {
  return (
    <>
      <div id="habilidades" className="titulo-section">
        {" "}
        <div className="titulo-section-habilidades">
          <p>HABILIDADES</p>
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
      <>
        <CardHabilidad
          nameHabilidad={svg.nameHabilidad}
          imagenHabilidad={svg.imagenHabilidad}
          textoDescriptivo={svg.textoDescriptivo}
        />
      </>
    );
  });
  return listadoDeHabilidades;
};

const CardHabilidad = (props) => {
  return (
    <>
      <div className="contenedor-svg">
        <img
          className="image-habilidad"
          src={props.imagenHabilidad}
          alt={props.nameHabildad}
        />
        <div className="text-descriptivo">
          {" "}
          <p>{props.textoDescriptivo}</p>
        </div>
      </div>
    </>
  );
};
