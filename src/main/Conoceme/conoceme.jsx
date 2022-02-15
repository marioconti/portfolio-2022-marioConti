import React from "react";
import "./conoceme.css";
import "./conoceme-queries.css";

export const Conoceme = () => {
  return (
    <>
      <div id="conoceme" className="section-conoceme">
        <div className="section-descripcion">
          <img
            className="imagen-fondo"
            src="/images/bg-img.jpg"
            alt="imagen-fondo"
          />
          <div className="texto-descripcion">
            <h3>Hola, soy</h3>
            <h1>Mario Conti</h1>
            <h2>
              DESARROLLADOR WEB <span>FRONTEND </span>{" "}
            </h2>
            <div className="links-personal">
              <a
                id="conoceme"
                className="boton-link bg-btn-1"
                href="../#conoceme"
              >
                Conóceme
              </a>
              <a
                id="contactame"
                className="boton-link bg-btn-2 btn-text"
                href="../#contacto"
              >
                Contáctame
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

<p>
  {/* Hola! Soy Mario, estudiante de
                <span className="bold"> Desarrollo Web Frontend.</span>{" "}
                Actualmente me encuentro realizando prácticas en
                <span className="bold"> React</span>. <br /> Aspiro a ser parte
                de grandes proyectos que generen{" "}
                <span className="bold"> experiencias inolvidables.</span> <br />
                Si buscas alguien{" "}
                <span className="bold">organizado, detallista</span>, con
                <span className="bold"> actitud</span> y muchas ganas de{" "}
                <span className="bold">crecer y trabajar en equipo</span> no
                dudes en contactarme! */}
</p>;
