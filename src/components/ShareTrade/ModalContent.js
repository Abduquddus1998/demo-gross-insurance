// @flow
import React, { useState } from "react";
import { useSelector } from "react-redux";

import { ShareCertificate } from "assets/icons/svg-icons";
import back from "assets/images/shareback.png";

import "./ModalContent.scss";

type ModalContentType = {
  onPrice: () => void,
};

const ModalContent = ({ onPrice }: ModalContentType) => {
  const shareDetails = useSelector((state) => state.shares.shareDetails[0]);
  const [price, setPrice] = useState("");

  const onPriceSelect = () => {
    onPrice(price, shareDetails);
  };

  return (
    <div className="modal-container">
      <div
        className="share"
        style={{
          marginTop: 0,
          marginBottom: "2rem",
          backgroundImage: `url(${back})`,
        }}
      >
        <div className="share-price">
          <h3>{shareDetails.bond_absolute_value}</h3>
        </div>
        <div className="short-details">
          <div className="info">
            <span>
              Series Number:
              {" " + shareDetails.bond_series + " " + shareDetails.bond_number}
            </span>
            <span>Share profit percent: {shareDetails.bond_percent}%</span>
          </div>
          <div className="share-icon">
            <ShareCertificate width="50px" height="50px" />
          </div>
        </div>
      </div>
      <div className="full-info">
        <div className="content-items">
          <div>Share value: </div>
          <div>{" " + shareDetails.bond_absolute_value}</div>
        </div>
        <div className="content-items">
          <div>Share percent:</div>
          <div>{shareDetails.bond_percent}%</div>
        </div>
        <div className="content-items">
          <div>Date of Issue:</div>
          <div>{shareDetails.bond_start_date} </div>
        </div>
        <div className="content-items">
          <div>Expiry Duration:</div>
          <div>{shareDetails.bond_life_time} months</div>
        </div>
        <div className="content-items">
          <div>Date of Expiry:</div>
          <div>{shareDetails.bond_end_date}</div>
        </div>
        {shareDetails.transfer_type === !0 && (
          <div className="content-items">
            <div>Seller Name:</div>
            <div>{shareDetails.seller_name}</div>
          </div>
        )}

        <div className="content-items">
          <div>Bought date:</div>
          <div>{shareDetails.buy_date}</div>
        </div>
        <div className="content-items">
          <div>Bought price:</div>
          <div>{shareDetails.buy_price}</div>
        </div>
        <div className="content-items">
          <div>Sell price: </div>
          <input
            type="text"
            name="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="price-input"
          />
          <button className="price-button" onClick={onPriceSelect}>
            Fixed
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalContent;
