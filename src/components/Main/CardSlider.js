import React from "react";
import { useSelector } from "react-redux";
import { Avatar, Carousel } from "antd";
import { UserOutlined } from "@ant-design/icons";

import "./CardSlider.scss";

const CardSlider = () => {
  const reviews = useSelector((state) => state.main.reviews);

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
        <h4>User Reviews</h4>
      </div>
      <Carousel
        {...cardCarouselSetting}
        style={cardStyle}
        autoplay
        autoplaySpeed={3000}
      >
        {reviews.map((review) => (
          <div key={review.review_id} className="card-outer">
            <div className="card-inner">
              <div className="review-header">
                <div className="avatar">
                  <Avatar size={64} icon={<UserOutlined />} />
                </div>
                <div className="user-name">
                  <h4>{review.reviewer_nickname}</h4>
                </div>
              </div>
              <div className="review">{review.reviewer_comment}</div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default CardSlider;
