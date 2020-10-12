import React from "react";

import "./FirstStep.scss";
import { useSelector } from "react-redux";

const SecondStep = () => {
  const secondStepInfo = useSelector((state) => state.shares.secondStepInfo);
  return (
    <React.Fragment>
      <div className="step-item">
        <div>Name: </div>
        <div>
          {" " +
            secondStepInfo.customer_name +
            "  " +
            secondStepInfo.customer_surname}
        </div>
      </div>
      <div className="step-item">
        <div>Balance: </div>
        <div>{" " + secondStepInfo.customer_balance}</div>
      </div>
      <div className="step-item">
        <div>Account Number: </div>
        <div>{" " + secondStepInfo.customer_account_number}</div>
      </div>
    </React.Fragment>
  );
};

export default SecondStep;
