import React from "react";
import { ShareCertificate } from "assets/icons/svg-icons";

import "./ModalContent.scss";

const ModalContent = () => {
  return (
    <div className="modal-content">
      <div className="share" style={{ marginTop: 0, marginBottom: "2rem" }}>
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
      </div>
      <div className="full-info">
        <div className="content-items">
          <div>Share value: </div>
          <div>1000000</div>
        </div>
        <div className="content-items">
          <div>Share percent:</div>
          <div>16%</div>
        </div>
        <div className="content-items">
          <div>Date of Expiry:</div>
          <div>6 month</div>
        </div>
        <div className="content-items">
          <div>Expiry Duration:</div>
          <div>6 months</div>
        </div>
        <div className="content-items">
          <div>Date of Expiry:</div>
          <div>05/2021</div>
        </div>
        <div className="content-items">
          <div>Seller Name:</div>
          <div>John Doe</div>
        </div>
      </div>
    </div>
  );
};

export default ModalContent;
