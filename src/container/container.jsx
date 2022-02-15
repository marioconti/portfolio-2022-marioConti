import React from "react";
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
      </div>
    </>
  );
};
