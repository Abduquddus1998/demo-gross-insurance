import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Modal } from "antd";

import Share from "components/ShareTrade/Share";
import ModalContent from "components/ShareTrade/ModalContent";

import {
  currentShares,
  onShowModal,
  sellShareAction,
} from "store/actions/shares";

import "./CurrentShares.scss";

const CurrentShares = () => {
  const dispatch = useDispatch();
  const currentBonds = useSelector((state) => state.shares.currentShares);
  const showModal = useSelector((state) => state.shares.hideModal);
  const [shareDetails, setDetails] = useState("");
  const [sharePrice, setPrice] = useState("");

  const accNumber = sessionStorage.getItem("account_number");

  const bodyStyle = {
    paddingTop: "2rem",
    paddingLeft: "2rem",
    paddingRight: "3rem",
  };

  const handleCancel = () => {
    dispatch(onShowModal());
  };

  const handleOk = () => {
    dispatch(onShowModal());
  };

  useEffect(() => {
    dispatch(currentShares(accNumber));
  }, [dispatch, accNumber]);

  const getSharePrice = (price, shareDetails) => {
    setPrice(price);
    setDetails(shareDetails);
  };

  const onShareSell = useCallback(async () => {
    await dispatch(
      sellShareAction(
        accNumber,
        shareDetails.bond_series,
        shareDetails.bond_number,
        sharePrice
      )
    ).then(({ payload }) => payload && dispatch(onShowModal));
  }, [accNumber, dispatch, sharePrice, shareDetails]);

  return (
    <div className="bond-container">
      {currentBonds &&
        currentBonds.map((bonds, index) => (
          <Share key={index} bond={bonds} accNumber={accNumber} />
        ))}
      <div className="modal-block">
        <React.Fragment>
          <Modal
            visible={showModal}
            onOk={handleOk}
            onCancel={handleCancel}
            bodyStyle={bodyStyle}
            width="480px"
            footer={[
              <Button onClick={handleOk} key="back" type="primary" danger>
                Cancel
              </Button>,
              <Button onClick={onShareSell} key="submit" type="primary">
                Sell
              </Button>,
            ]}
          >
            <ModalContent onPrice={getSharePrice} />
          </Modal>
        </React.Fragment>
      </div>
    </div>
  );
};

export default CurrentShares;
