import React from "react";
import { Modal, Button } from "antd";
import { useDispatch, useSelector } from "react-redux";

import Share from "./Share";
import ModalContent from "./ModalContent";
import TradeSteps from "./TradeSteps";
import Footer from "../Footer/Footer";

import { onShowModal } from "store/actions/shares";

import "./ShareTrade.scss";
import Navigation from "../Navigation/Navigation";

const ShareTrade = () => {
  const showModal = useSelector((state) => state.shares.hideModal);
  const dispatch = useDispatch();

  const bodyStyle = {
    paddingTop: "2rem",
    paddingLeft: "2rem",
    paddingRight: "2rem",
  };

  const handleCancel = () => {
    dispatch(onShowModal());
  };

  const handleOk = () => {
    dispatch(onShowModal());
  };

  return (
    <div className="trade-container">
      <Navigation />

      <div style={{ paddingTop: "10rem" }}>
        <div className="trade-title">
          <h3>Trade Shopping</h3>
        </div>
        <div className="shares-block">
          <Share />
          <Share />
          <Share />
          <Share />
          <Share />
          <Share />
          <Share />
          <Share />
        </div>
        <React.Fragment>
          <Modal
            visible={showModal}
            title="Share number"
            onOk={handleOk}
            onCancel={handleCancel}
            bodyStyle={bodyStyle}
            width="450px"
            footer={[
              <Button onClick={handleOk} key="back" type="primary" danger>
                Cancel
              </Button>,
              <Button key="submit" type="primary">
                Dalee
              </Button>,
            ]}
          >
            <ModalContent />
          </Modal>
        </React.Fragment>
      </div>
      <TradeSteps />
      <Footer />
    </div>
  );
};

export default ShareTrade;
