import React, { Component } from "react";
import "./proyectos.css";
import { arrayProyectos } from "./arrayProyectos";
import { CardProyecto } from "./CardProyecto";

import Slider from "react-slick";

export default class SimpleSlider extends Component {
  render() {
    var settings = {
      centerMode: true,
      infinite: true,
      centerPadding: "60px",
      dots: true,
      fade: true,
      speed: 500,
      slidesToShow: 3,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <div className="center carousel-proyectos-container">
        <h2>Proyectos</h2>
        <Slider {...settings}>
          {arrayProyectos.map((proyectos) => {
            return (
              <div key={proyectos.id}>
                <CardProyecto proyectos={proyectos} />
              </div>
            );
          })}
        </Slider>
      </div>
    );
  }
}