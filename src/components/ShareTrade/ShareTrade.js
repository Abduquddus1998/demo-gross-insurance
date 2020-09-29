import React, { useState } from "react";
import { Modal } from "antd";

import { ShareCertificate } from "assets/icons/svg-icons";
import "./ShareTrade.scss";

const ShareTrade = () => {
  const [showModal, setShowModal] = useState(false);

  const onTriggerModal = () => {
    console.log("trigger");
    setShowModal(true);
  };

  const handleCancel = () => {
    setShowModal(false);
  };

  const handleOk = () => {
    setShowModal(false);
  };

  return (
    <div className="trade-container">
      <div className="trade-title">
        <h3>Trade Shop</h3>
      </div>
      <div className="shares-block">
        <div className="share">
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
            <button type={"button"} onClick={onTriggerModal}>
              Hello
            </button>
          </div>
        </div>
        <React.Fragment>
          <Modal
            visible={showModal}
            title="Basic Modal"
            onOk={handleOk}
            onCancel={handleCancel}
          >
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
          </Modal>
        </React.Fragment>
      </div>
    </div>
  );
};

export default ShareTrade;
