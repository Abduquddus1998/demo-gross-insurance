import React from "react";
import { Carousel } from "antd";
import Statistics1 from "assets/images/statistics1.jpg";
import Statistics2 from "assets/images/statistics2.jpg";
import Statistics3 from "assets/images/statistics3.jpg";
import Statistics4 from "assets/images/statistics4.jpg";

const MainCarousel = () => {
  return (
    <div>
      <Carousel autoplay effect="fade">
        <div className="carousel-items">
          <img src={Statistics1} alt="statistics" />
        </div>
        <div className="carousel-items">
          <img src={Statistics2} alt="statistics" />
        </div>
        <div className="carousel-items">
          <img src={Statistics3} alt="statistics" />
        </div>
        <div className="carousel-items">
          <img src={Statistics4} alt="statistics" />
        </div>
      </Carousel>
    </div>
  );
};

export default MainCarousel;
