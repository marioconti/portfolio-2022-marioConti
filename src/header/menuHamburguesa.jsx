import React from "react";
import { Link } from "react-scroll";

export const MenuHamburguesa = ({ setMenuActive }) => {
  return (
    <div className="menu-desplegable">
      <div className="contenedor-links">
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
          PORTFOLIO
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
          HABILIDADES
        </Link>
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
          CONÓCEME
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
          CONTACTO
        </Link>
        <a
        download="CV Mario Conti"
        href="/assets/CV Mario Conti.pdf"
        className={`link-section margin`}
      >
        CV
      </a>
      </div>
    </div>
  );
};
