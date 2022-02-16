/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import "./header.css";
import "./header-queries.css";

export const Header = () => {
  const [navClass, setNavClass] = useState("");
  const [navClassB, setNavClassB] = useState("");

  const fixNav = () => {
    const nav = document.querySelector(".section-header");

    if (window.scrollY > nav.offsetHeight + 50) {
      // sumar un estado para que aparezca un boton de back top cuando pase esto tmb
      setNavClass("active");
      setNavClassB("display-none");
    } else {
      setNavClass("");
      setNavClassB("");
    }
  };

  window.addEventListener("scroll", fixNav);
  return (
    <>
      <div id="header" className={`section-header ${navClass}`}>
        <a href="#header" className={`logo ${navClassB}`}>
          M.
        </a>
        <div className={`nav-sections ${navClassB}`}>
          <a href="#conoceme" className={`link-section ${navClassB}`}>
            Conóceme
          </a>
          <a href="#proyectos" className={`link-section ${navClassB}`}>
            Proyectos
          </a>
          <a href="#habilidades" className={`link-section ${navClassB}`}>
            Habilidades
          </a>
          <a href="#contacto" className={`link-section ${navClassB}`}>
            Contactáme
          </a>
        </div>

        <div className="navbar-mobile">
          <input type="checkbox" id="hamburguesa" />
          <label for="hamburguesa" className="menu-hamburguesa">
            <span className="linea-1"></span>
            <span className="linea-2"></span>
            <span className="linea-3"></span>
          </label>
          <div className="nav-menu-mobile">
            <div className="menu">
              <a className="link-section" href="#">
                Inicio
              </a>
              <a className="link-section" href="../#conoceme">
                Conóceme
              </a>
              <a className="link-section" href="../#proyectos">
                Proyectos
              </a>
              <a className="link-section" href="../#habilidades">
                Habilidades
              </a>
              <a className="link-section" href="../#contacto">
                Contactáme
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
