/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import "./footer.css";
import "./footer-queries.css";

export const Footer = () => {
  return (
    <>
      <div className="contenedor-footer">
        <div id="contacto" className="section-footer">
          <div className="info-contacto">
            <h2>CONTACTO</h2>
            <p>
              <span>UBICACIÓN: </span> San Miguel de Tucumán, Arngentina
            </p>
            <p>
              <span>NÚMERO DE CONTACTO: </span> (+54 9 ) 3816599099
            </p>
            <p>
              <span>EMAIL: </span> marioconti91@gmail.com
            </p>
          </div>
          <div className="contenedor-svgs">
            <a
              target="_blank"
              href="https://www.linkedin.com/in/mario-augusto-conti/"
            >
              {" "}
              <img
                className="svgFooter"
                src="../../images/linkLinkedin.svg"
                alt="link linkedin"
              />
            </a>

            <a target="_blank" href="https://www.github.com/marioconti">
              <img
                className="svgFooter"
                src="../../images/linkGithub.svg"
                alt="link githuba"
              />
            </a>

            <a target="_blank" href="https://www.facebook.com/mario.conti.520/">
              {" "}
              <img
                className="svgFooter bg-withe-svg"
                src="../../images/linkFacebook.svg"
                alt="link facebook"
              />
            </a>

            <a
              target="_blank"
              href="https://www.instagram.com/mario.conti/?hl=es"
            >
              {" "}
              <img
                className="svgFooter instagram bg-withe-svg"
                src="../../images/linkInstagram.svg"
                alt="link instagram"
              />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
