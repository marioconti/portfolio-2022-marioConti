import React from "react";
import { Link } from "react-scroll";

export const MenuHeader = ({ navClassB }) => {
  return (
    <div className={`nav-sections ${navClassB}`}>
      <Link
        to="portfolio"
        spy={true}
        smooth={true}
        offset={10}
        duration={1000}
        className={`link-section ${navClassB}`}
      >
        PORTFOLIO
      </Link>
      <Link
        to="habilidades"
        spy={true}
        smooth={true}
        offset={20}
        duration={1000}
        className={`link-section ${navClassB}`}
      >
        HABILIDADES
      </Link>
      <Link
        to="conoceme"
        spy={true}
        smooth={true}
        offset={-30}
        duration={1000}
        className={`link-section ${navClassB}`}
      >
        CONÓCEME
      </Link>
      <Link
        to="contacto"
        spy={true}
        smooth={true}
        offset={50}
        duration={1000}
        className={`link-section ${navClassB}`}
      >
        CONTACTO
      </Link>
      <a
        download="CV Mario Conti"
        href="/assets/CV Mario Conti.pdf"
        className={`link-section ${navClassB}`}
      >
        CV
      </a>
    </div>
  );
};
