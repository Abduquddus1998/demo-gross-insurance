import React, { useCallback, useEffect } from "react";
import { Modal, Button } from "antd";
import { useDispatch, useSelector } from "react-redux";

import Share from "./Share";
import ModalContent from "./ModalContent";
import Footer from "components/Footer/Footer";
import Navigation from "components/Navigation/Navigation";

import {
  onShowModal,
  getTradeShares,
  shareBuyFirstStep,
} from "store/actions/shares";

import "./ShareTrade.scss";
import { navigationRouter } from "store/actions/navigation";

const ShareTrade = () => {
  const dispatch = useDispatch();
  const showModal = useSelector((state) => state.shares.hideModal);
  const tradeShares = useSelector((state) => state.shares.tradeShares);
  const shareDetails = useSelector((state) => state.shares.shareDetails);

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

  useEffect(() => {
    dispatch(getTradeShares());
  }, [dispatch]);

  const buyCurrentShare = useCallback(async () => {
    await dispatch(
      shareBuyFirstStep(shareDetails.bond_series, shareDetails.bond_number)
    );

    await dispatch(navigationRouter("/buy-share-steps"));
  }, [shareDetails, dispatch]);

  return (
    <div className="trade-container">
      <Navigation />

      <div style={{ paddingTop: "10rem" }}>
        <div className="trade-title">
          <h3>Trade Shopping</h3>
        </div>
        <div className="shares-block">
          {tradeShares.map((share, index) => (
            <Share key={index} bond={share} accNumber={null} />
          ))}
        </div>
        <React.Fragment>
          <Modal
            visible={showModal}
            onOk={handleOk}
            onCancel={handleCancel}
            bodyStyle={bodyStyle}
            width="450px"
            footer={[
              <Button onClick={handleOk} key="back" type="primary" danger>
                Cancel
              </Button>,
              <Button onClick={buyCurrentShare} key="submit" type="primary">
                Buy
              </Button>,
            ]}
          >
            <ModalContent />
          </Modal>
        </React.Fragment>
      </div>

      <Footer />
    </div>
  );
};

export default ShareTrade;
