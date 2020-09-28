import React from "react";
import Advertising1 from "assets/images/advertising1.jpg";
import "./Ads.scss";

const LeftAds = () => {
  return (
    <div className="ads">
      <img src={Advertising1} alt="ads" />
      <img src={Advertising1} alt="ads" />
      <img src={Advertising1} alt="ads" />
    </div>
  );
};

export default LeftAds;
