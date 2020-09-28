import React from "react";
import { Avatar, Carousel } from "antd";
import { UserOutlined } from "@ant-design/icons";

import "./CardSlider.scss";

const CardSlider = () => {
  const cardCarouselSetting = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    height: 200,
  };

  const cardStyle = {
    height: "330px",
  };
  return (
    <div className="users-slider">
      <div className="slider-title">
        <h4>Oтзывы</h4>
      </div>
      <Carousel
        {...cardCarouselSetting}
        style={cardStyle}
        autoplay
        autoplaySpeed={3000}
      >
        <div className="card-outer">
          <div className="card-inner">
            <div className="review-header">
              <div className="avatar">
                <Avatar size={64} icon={<UserOutlined />} />
              </div>
              <div className="user-name">
                <h4>John Doe1</h4>
              </div>
            </div>
            <div className="review">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci
              aliquam dolore eos est harum, hic minus non numquam omnis ratione
              sapiente sunt tempora tenetur unde veniam? Magnam numquam soluta
              suscipit.
            </div>
          </div>
        </div>

        <div className="card-outer">
          <div className="card-inner">
            <div className="review-header">
              <div className="avatar">
                <Avatar size={64} icon={<UserOutlined />} />
              </div>
              <div className="user-name">
                <h4>John Doe2</h4>
              </div>
            </div>
            <div className="review">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci
              aliquam dolore eos est harum, hic minus non numquam omnis ratione
              sapiente sunt tempora tenetur unde veniam? Magnam numquam soluta
              suscipit.
            </div>
          </div>
        </div>
        <div className="card-outer">
          <div className="card-inner">
            <div className="review-header">
              <div className="avatar">
                <Avatar size={64} icon={<UserOutlined />} />
              </div>
              <div className="user-name">
                <h4>John Doe3</h4>
              </div>
            </div>
            <div className="review">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci
              aliquam dolore eos est harum, hic minus non numquam omnis ratione
              sapiente sunt tempora tenetur unde veniam? Magnam numquam soluta
              suscipit.
            </div>
          </div>
        </div>
        <div className="card-outer">
          <div className="card-inner">
            <div className="review-header">
              <div className="avatar">
                <Avatar size={64} icon={<UserOutlined />} />
              </div>
              <div className="user-name">
                <h4>John Doe</h4>
              </div>
            </div>
            <div className="review">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci
              aliquam dolore eos est harum, hic minus non numquam omnis ratione
              sapiente sunt tempora tenetur unde veniam? Magnam numquam soluta
              suscipit.
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default CardSlider;
