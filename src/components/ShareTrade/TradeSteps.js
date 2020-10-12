import React, { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Steps } from "antd";

import Navigation from "components/Navigation/Navigation";
import Footer from "components/Footer/Footer";
import FirstStep from "./FirstStep";
import SecondStep from "./SecondStep";

import {
  buyShare,
  onShowModal,
  shareBuySecondStep,
  shareBuyThirdStep,
} from "store/actions/shares";
import { navigationRouter } from "store/actions/navigation";

import "./TradeSteps.scss";

const TradeSteps = () => {
  const { Step } = Steps;
  const dispatch = useDispatch();
  const accNumber = useSelector((state) => state.auth.accountNumber);
  const showNext = useSelector((state) => state.shares.showNextStep);
  const secondStepInfo = useSelector((state) => state.shares.secondStepInfo);
  const firstStepInfo = useSelector((state) => state.shares.firstStepInfo);
  const [stepCount, setCount] = useState(0);
  const [showBuy, onShowBuy] = useState(false);

  const getSecondStepInfo = useCallback(async () => {
    await dispatch(shareBuySecondStep(accNumber));
    setCount(stepCount + 1);
  }, [dispatch, accNumber, stepCount]);

  const onThirdStep = async () => {
    await dispatch(
      shareBuyThirdStep(
        accNumber,
        firstStepInfo.bond_series,
        firstStepInfo.bond_number,
        firstStepInfo.money_amount
      )
    );
    onShowBuy(true);
    setCount(stepCount + 1);
  };

  const buyNewShare = useCallback(async () => {
    await dispatch(
      buyShare(
        secondStepInfo.customer_account_number,
        firstStepInfo.bond_series,
        firstStepInfo.bond_number
      )
    );

    dispatch(onShowModal());

    await dispatch(navigationRouter("/depository/currentshares"));
  }, [dispatch, secondStepInfo, firstStepInfo]);

  return (
    <div className="steps-container">
      <Navigation />
      <div className="step-content">
        <div className="title">Buy share section</div>
        <div className="buy-steps">
          <Steps direction="vertical" size="large" current={stepCount}>
            <Step title={stepCount === 0 ? "In Progress" : "Finished"} />
            <Step title={stepCount === 1 ? "In Progress" : "Finished"} />
            <Step title={stepCount === 2 ? "In Progress" : "Finished"} />
          </Steps>
          <div className="share-params">
            <div className="steps-details">
              <div className="steps">
                <FirstStep />
              </div>
              <div className="confirm-step ">
                <button className="btn btn-success" onClick={getSecondStepInfo}>
                  Confirm
                </button>
              </div>
            </div>
            {showNext && (
              <div className="steps-details">
                <div className="steps">
                  <SecondStep />
                </div>
                <div className="confirm-step ">
                  <button className="btn btn-success" onClick={onThirdStep}>
                    Confirm
                  </button>
                </div>
              </div>
            )}
            {showBuy && (
              <div className="steps-details" style={{ alignItems: "center" }}>
                <button
                  className="btn btn-success"
                  style={{ marginTop: "8rem", width: "50%" }}
                  onClick={buyNewShare}
                >
                  Buy
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default TradeSteps;
