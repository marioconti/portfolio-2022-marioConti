import React from "react";
import { Link } from "react-scroll";
import { Header } from "../header/header";
import { Main } from "../main/main";
import { Footer } from "../footer/footer";
import "./container.css";

export const Container = () => {
  return (
    <>
      <div className="contenedor-principal">
        <Header />
        <Main />
        <Footer />
        <Link to="home" spy={true} smooth={true} offset={-10} duration={1000}>
          <img className="icon-home" src="images/home.svg" alt="imagen casa" />
        </Link>
      </div>
    </>
  );
};
