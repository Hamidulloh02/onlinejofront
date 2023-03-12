import React, { Component } from "react";
import Slider from "react-slick";
import "./journalcarusel.css"
export default class CenterMode extends Component {
  render() {
    const settings = {
      className: "Carusjournal",
      centerMode: true,
      infinite: true,
      centerPadding: "100px",
      slidesToShow: 5,
      speed: 3000,
      autoplay:true,
    };
    return (
      <div className="CarusMain mt-5 center">
        <div className="article__title mt-2 mb-3">Teatr va Guliston Jurnallari</div>
        <Slider {...settings}>
          <div className="CarusItem">
            <img src="./images/TeatrCarus/teatr01.jpg" alt="" />
          </div>
          <div  className="CarusItem">
          <img src="./images/TeatrCarus/teatr02.jpg" alt="" />        
          </div>
          <div  className="CarusItem">
          <img src="./images/TeatrCarus/teatr03.jpg" alt="" />
          </div>
          <div  className="CarusItem">
          <img src="./images/TeatrCarus/teatr04.jpg" alt="" />
          </div>
          <div  className="CarusItem">
          <img src="./images/TeatrCarus/teatr05.jpg" alt="" />
          </div>
          <div  className="CarusItem">
          <img src="./images/TeatrCarus/teatr01.jpg" alt="" />
          </div>
        </Slider>
      </div>
    );
  }
}