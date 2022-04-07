import React from "react";
import "./sobreMi.css";
import "./sobreMiQueries.css";
export const SobreMi = () => {
  return (
    <div className="sobre-mi-main">
      <div id="conoceme" className="sobre-mi-container">
        <div
          className="imagen-mario"
          data-aos="fade-left"
          data-aos-offset="-200"
          data-aos-delay="0"
          data-aos-duration="1500"
          data-aos-easing="ease"
          data-aos-mirror="true"
          data-aos-once="true"
          data-aos-anchor-placement="top-center"
        >
          <div className="fondo-imagen"></div>
          <img
            className="imagen-perfil"
            src="images/foto-mario-conti.jpg"
            alt=""
          />
        </div>
        <div className="texto-presentación">
          <h1
            data-aos="fade-right"
            data-aos-offset="-200"
            data-aos-delay="0"
            data-aos-duration="1500"
            data-aos-easing="ease"
            data-aos-mirror="true"
            data-aos-once="true"
            data-aos-anchor-placement="top-center"
          >
            UN POCO DE MÍ
          </h1>
          <p
            data-aos="fade-up"
            data-aos-offset="-200"
            data-aos-delay="0"
            data-aos-duration="1500"
            data-aos-easing="ease"
            data-aos-mirror="true"
            data-aos-once="true"
            data-aos-anchor-placement="top-center"
          >
            Comencé a programar como autodidacta. Me apasionsé por el
            <span className="bold"> Frontend</span> al ver su potencial
            creativo.
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
