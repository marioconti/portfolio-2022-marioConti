import React from "react";
import "./sobreMi.css";
import "./sobreMiQueries.css";
export const SobreMi = () => {
  return (
    <div className="sobre-mi-main">
      <div id="conoceme" className="sobre-mi-container">
        <div className="mask-1"></div>
        <div className="mask-5"></div>
        <div className="imagen-mario">
          <div className="mask-4"></div>
          <div className="mask-6"></div>
          <div className="fondo-imagen"></div>
          <img
          className="imagen-perfil"
            src="images/foto-mario-conti.jpg"
            alt=""
          />
        </div>
        <div className="texto-presentación">
          <div className="mask-2"></div>
          <div className="mask-3"></div>
          <h1>UN POCO DE MÍ</h1>
          <p>
            Comencé a programar como autodidacta.
            <br />
            Me apasioné por el<span className="bold"> Frontend</span> al ver su
            potencial creativo.
            <br />
            <br />
            He aprendido a programar con <span className="bold">
              {" "}
              React Js
            </span>{" "}
            y día a día amplío mis conocimientos en otras teconologías y
            lenguajes.
            <br />
            <br />
            Entre mis objetivos se encuentran: crecer como desarrollador
            frontend, estar a la vanguardia en cuanto a prácticas y tecnologías;
            y disfrutar de lo que hago.
            <br />
            <br />
            Hoy veo a la programación como una gran escuela, es{" "}
            <span className="bold">desafiante, divertida y apasionante.</span>
          </p>
        </div>
      </div>
    </div>
  );
};
