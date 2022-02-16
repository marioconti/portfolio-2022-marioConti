import React from "react";
import "./main.css";
import { Conoceme } from "./Conoceme/conoceme";
import { Proyectos } from "./proyectos/proyectos";
import { Tecnologias } from "./Habilidades/habilidades";
import { SobreMi } from "./sobreMi/sobreMi";

export const Main = () => {
  return (
    <>
      <div className="container-sections">
        <Conoceme />
        <Proyectos />
        <Tecnologias />
        <SobreMi/>
      </div>
    </>
  );
};
