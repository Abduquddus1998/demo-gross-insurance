import React, { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Steps } from "antd";

import { shareBuySecondStep } from "store/actions/shares";

import Navigation from "components/Navigation/Navigation";
import Footer from "components/Footer/Footer";
import FirstStep from "./FirstStep";
import SecondStep from "./SecondStep";

import "./TradeSteps.scss";

const TradeSteps = () => {
  const { Step } = Steps;
  const dispatch = useDispatch();
  const accNumber = useSelector((state) => state.auth.accountNumber);
  const showNext = useSelector((state) => state.shares.showNextStep);
  const [stepCount, setCount] = useState(0);

  const getSecondStepInfo = useCallback(async () => {
    await dispatch(shareBuySecondStep(accNumber));
    setCount(stepCount + 1);
  }, [dispatch, accNumber, stepCount]);

  return (
    <div className="steps-container">
      <Navigation />
      <div className="step-content">
        <div className="title">Buy share section</div>
        <div className="buy-steps">
          <Steps direction="vertical" size="large" current={stepCount}>
            <Step title={stepCount === 0 ? "In Progress" : "Finished"} />
            <Step title={stepCount === 1 ? "In Progress" : "Finished"} />
            <Step title="In Progress" description="This is a description." />
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
                  <button className="btn btn-success">Confirm</button>
                </div>
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
