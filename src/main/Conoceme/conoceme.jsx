import React from "react";
import "./conoceme.css";
import "./conoceme-queries.css";
import { Link } from "react-scroll";

export const Conoceme = () => {
  return (
    <>
      <div id="home" className="section-conoceme">
        <div className="section-descripcion">
          <div className="imagen-fondo"></div>
          <div className="contenedor-texto-descripcion">
            <div className="texto-descripcion">
              <h1>MARIO CONTI</h1>
              <h2>
                DESARROLLADOR WEB <span>FRONTEND </span>{" "}
              </h2>
              <div className="links-personal">
                <Link
                  to="conoceme"
                  spy={true}
                  smooth={true}
                  offset={-30}
                  duration={1000}
                  className="boton-link bg-btn-1"
                  data-aos="fade-left"
                  data-aos-offset="-1500"
                  data-aos-delay="0"
                  data-aos-duration="2000"
                  data-aos-easing="ease"
                  data-aos-mirror="true"
                  data-aos-once="true"
                  data-aos-anchor-placement="top-center"
                >
                  CONÓCEME
                </Link>
                <Link
                  to="contacto"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={1000}
                  className="boton-link bg-btn-2 btn-text"
                  data-aos="fade-right"
                  data-aos-offset="-1500"
                  data-aos-delay="0"
                  data-aos-duration="2000"
                  data-aos-easing="ease"
                  data-aos-mirror="true"
                  data-aos-once="true"
                  data-aos-anchor-placement="top-center"
                >
                  CONTÁCTAME
                </Link>
              </div>
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
