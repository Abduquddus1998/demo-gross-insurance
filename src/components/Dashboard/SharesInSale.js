import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Share from "components/ShareTrade/Share";

import { sharesInSale } from "store/actions/dashboard";

import "./SharesInSale.scss";

const SharesInSale = () => {
  const dispatch = useDispatch();
  const saleShares = useSelector((state) => state.dashboard.sharesInSale);

  const accountNumber = localStorage.getItem("account_number");

  useEffect(() => {
    dispatch(sharesInSale(accountNumber));
  }, [dispatch, accountNumber]);

  return (
    <div className="shares-in-sale">
      {saleShares &&
        saleShares.map((share, index) => (
          <Share key={index} bond={share} accNumber={accountNumber} />
        ))}
    </div>
  );
};

export default SharesInSale;
