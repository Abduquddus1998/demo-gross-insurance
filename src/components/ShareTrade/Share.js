import React from "react";
import { useDispatch } from "react-redux";

import { onShowModal } from "store/actions/shares";
import { ShareCertificate } from "assets/icons/svg-icons";

import back from "assets/images/shareback.png";

import "./Share.scss";

const Share = () => {
  const dispatch = useDispatch();

  const onTriggerModal = () => {
    dispatch(onShowModal());
  };
  return (
    <div className="share" style={{ backgroundImage: `url(${back})` }}>
      <div className="share-price">
        <h3>120 000</h3>
      </div>
      <div className="short-details">
        <div className="info">
          <span>Lorem: ipsum dolor sit amet, consectetur</span>
          <span>Lorem: ipsum dolor sit amet, consectetur</span>
        </div>
        <div className="share-icon">
          <ShareCertificate width="50px" height="50px" />
        </div>
      </div>
      <div className="shares-button">
        <button type="button" onClick={onTriggerModal}>
          Click
        </button>
      </div>
    </div>
  );
};

export default Share;
