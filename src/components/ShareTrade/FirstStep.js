// @flow
import React from "react";
import { useSelector } from "react-redux";

import "./FirstStep.scss";

const FirstStep = () => {
  const firstStepInfo = useSelector((state) => state.shares.firstStepInfo);
  return (
    <React.Fragment>
      <div className="main-sections">
        <div className="step-item">
          <div>Value:</div>
          <div>{firstStepInfo.bond_absolute_value}</div>
        </div>
        <div className="step-item">
          <div>Date of Expire:</div>
          <div>{firstStepInfo.bond_end_date}</div>
        </div>
        <div className="step-item">
          <div>Duration :</div>
          <div>{firstStepInfo.bond_life_time} month</div>
        </div>
        <div className="step-item">
          <div>Share number:</div>
          <div>
            {firstStepInfo.bond_series + " " + firstStepInfo.bond_number}
          </div>
        </div>
      </div>
      <div className="main-sections">
        <div className="step-item">
          <div>Profit percent:</div>
          <div>{firstStepInfo.bond_percent}</div>
        </div>
        <div className="step-item">
          <div>Date of Issue:</div>
          <div>{firstStepInfo.bond_start_date}</div>
        </div>
        <div className="step-item">
          <div>Owner:</div>
          <div>{firstStepInfo.seller_name}</div>
        </div>
        <div className="step-item">
          <div>Price:</div>
          <div>{firstStepInfo.price}</div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default FirstStep;
