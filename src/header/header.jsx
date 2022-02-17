/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import "./header.css";
import "./header-queries.css";

export const Header = () => {
  const [navClass, setNavClass] = useState("");
  const [navClassB, setNavClassB] = useState("");
  const [navClassC, setNavCLassC] = useState("");
  const [width, setWidth] = useState(window.innerWidth);
  const [hamburguesaActive, setHamburguesa] = useState(false);
  const [menuActive, setMenuActive] = useState(false);

  useEffect(() => {
    window.addEventListener("resize", listenerWidth);
    window.addEventListener("scroll", fixNav);
    if (width < 899) {
      setHamburguesa(true);
    } else {
      setHamburguesa(false);
    }
    return () => {
      // Hacemos esto para que cuando se desmonte el componente se remueva el evento y no se siga ejectuando
      window.removeEventListener("resize", listenerWidth);
      window.removeEventListener("scroll", fixNav);
    };
  }, [hamburguesaActive, width]);

  const listenerWidth = () => {
    setWidth(window.innerWidth);
  };

  const fixNav = () => {
    const nav = document.querySelector(".section-header");

    if (window.scrollY > nav.offsetHeight + 50) {
      // sumar un estado para que aparezca un boton de back top cuando pase esto tmb
      setNavClass("active");
      setNavClassB("display-none");
      setNavCLassC("display-block");
    } else {
      setNavClass("");
      setNavClassB("");
      setNavCLassC("");
    }
  };

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
        {hamburguesaActive ? (
          <div
            className={`container-hamburguesa ${navClassB}`}
            onClick={() => setMenuActive(!menuActive)}
          >
            <img
              className="image-hamburguesa"
              src="images/menu-hamburguesa.svg"
              alt="menu-hamburguesa"
            />
          </div>
        ) : (
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
        )}
      </div>
      <Link to="home" spy={true} smooth={true} offset={-10} duration={1000}>
        <img
          className={`icon-home ${navClassC}`}
          src="images/home.svg"
          alt="imagen casa"
        />
      </Link>
      {menuActive && (
        <div className="menu-desplegable">
          <div className="contenedor-links">
            <Link
              to="conoceme"
              spy={true}
              smooth={true}
              offset={-30}
              duration={1000}
              className={`link-section margin`}
              onClick={() => {
                setMenuActive(false);
              }}
            >
              Conóceme
            </Link>
            <Link
              to="portfolio"
              spy={true}
              smooth={true}
              offset={10}
              duration={1000}
              className={`link-section margin`}
              onClick={() => {
                setMenuActive(false);
              }}
            >
              Proyectos
            </Link>
            <Link
              to="habilidades"
              spy={true}
              smooth={true}
              offset={20}
              duration={1000}
              className={`link-section margin`}
              onClick={() => {
                setMenuActive(false);
              }}
            >
              Habilidades
            </Link>
            <Link
              to="contacto"
              spy={true}
              smooth={true}
              offset={50}
              duration={1000}
              className={`link-section margin`}
              onClick={() => {
                setMenuActive(false);
              }}
            >
              Contactáme
            </Link>
          </div>
        </div>
      )}
    </>
  );
};
