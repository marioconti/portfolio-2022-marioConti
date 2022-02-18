/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import "./header.css";
import "./header-queries.css";
import { MenuHamburguesa } from "./menuHamburguesa";
import { MenuHeader } from "./menuHeader";

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

    if (window.scrollY > nav.offsetHeight + 5) {
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
        <div className="contenedor-nav">
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
            <MenuHeader navClassB={navClassB} />
          )}
        </div>{" "}
      </div>
      <Link to="home" spy={true} smooth={true} offset={-10} duration={1000}>
        <img
          className={`icon-home ${navClassC}`}
          src="images/home.svg"
          alt="imagen casa"
        />
      </Link>
      {menuActive && <MenuHamburguesa setMenuActive={setMenuActive} />}
    </>
  );
};
