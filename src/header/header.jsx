/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { Link } from "react-scroll";
import "./header.css";
import "./header-queries.css";

export const Header = () => {
  const [navClass, setNavClass] = useState("");
  const [navClassB, setNavClassB] = useState("");
  const [navClassC, setNavCLassC] =useState("")

  const fixNav = () => {
    const nav = document.querySelector(".section-header");

    if (window.scrollY > nav.offsetHeight + 50) {
      // sumar un estado para que aparezca un boton de back top cuando pase esto tmb
      setNavClass("active");
      setNavClassB("display-none");
      setNavCLassC("display-block")
    } else {
      setNavClass("");
      setNavClassB("");
      setNavCLassC("")
    }
  };

  window.addEventListener("scroll", fixNav);
  return (
    <>
      <div className={`section-header ${navClass}`}>
        <Link
          to="/"
          spy={true}
          smooth={true}
          offset={50}
          duration={1000}
          className={`logo ${navClassB}`}
        >
          M.
        </Link>
        <div className={`nav-sections ${navClassB}`}>
          <Link
            to="conoceme"
            spy={true}
            smooth={true}
            offset={-30}
            duration={1000}
            className={`link-section ${navClassB}`}
          >
            Conóceme
          </Link>
          <Link
            to="portfolio"
            spy={true}
            smooth={true}
            offset={10}
            duration={1000}
            className={`link-section ${navClassB}`}
          >
            Proyectos
          </Link>
          <Link
            to="habilidades"
            spy={true}
            smooth={true}
            offset={20}
            duration={1000}
            className={`link-section ${navClassB}`}
          >
            Habilidades
          </Link>
          <Link
            to="contacto"
            spy={true}
            smooth={true}
            offset={50}
            duration={1000}
            className={`link-section ${navClassB}`}
          >
            Contactáme
          </Link>
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
      <Link to="home" spy={true} smooth={true} offset={-10} duration={1000}>
        <img className={`icon-home ${navClassC}`} src="images/home.svg" alt="imagen casa" />
      </Link>
    </>
  );
};
