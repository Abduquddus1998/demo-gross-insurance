import React from "react";
import { Steps } from "antd";

import "./TradeSteps.scss";

const TradeSteps = () => {
  const { Step } = Steps;

  return (
    <div className="steps-container">
      <Steps direction="vertical" size="large" current={1}>
        <Step title="Finished" description="This is a description." />
        <Step title="In Progress" description="This is a description." />
        <Step title="Waiting" description="This is a description." />
      </Steps>
    </div>
  );
};

export default TradeSteps;
