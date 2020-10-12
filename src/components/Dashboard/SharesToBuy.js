import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Share from "components/ShareTrade/Share";

import { sharesInBuy } from "store/actions/dashboard";

import "./SharesInSale.scss";

const SharesToBuy = () => {
  const dispatch = useDispatch();
  const buyShares = useSelector((state) => state.dashboard.sharesInBuy);

  const accountNumber = localStorage.getItem("account_number");

  useEffect(() => {
    dispatch(sharesInBuy(accountNumber));
  }, [dispatch, accountNumber]);

  return (
    <div className="shares-in-sale">
      {buyShares &&
        buyShares.map((share, index) => (
          <Share key={index} bond={share} accNumber={accountNumber} />
        ))}
    </div>
  );
};

export default SharesToBuy;
