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
      initialSlide: 4,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
          },
        },
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <div className="carousel-proyectos-container">
        <h2
          className="section-title"
          data-aos="fade-left"
          data-aos-offset="-300"
          data-aos-delay="0"
          data-aos-duration="2000"
          data-aos-easing="ease"
          data-aos-mirror="true"
          data-aos-once="true"
          data-aos-anchor-placement="top-center"
        >
          PORTFOLIO
        </h2>
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
