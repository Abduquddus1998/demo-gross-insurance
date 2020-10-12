import React, { useState } from "react";

import "./BalanceModalContent.scss";

const BalanceModalContent = ({ updateBalance }) => {
  const [cardNumber, setCardNumber] = useState("");
  const [expireDate, setExpireDate] = useState("");
  const [amount, setAmount] = useState("");
  const [phoneNum, setPhoneNum] = useState("");
  const [confirm, setConfirm] = useState("");

  const handleOnchange = (setState) => (e) => setState(e.target.value);

  const balanceAccepted = () => {
    updateBalance(cardNumber, phoneNum, expireDate, amount, confirm);
  };

  return (
    <div className="balance-modal">
      <div className="balance-fields">
        <div className="field-desc">Card number</div>
        <input
          className="balance-input"
          type="text"
          onChange={handleOnchange(setCardNumber)}
        />
      </div>
      <div className="balance-fields">
        <div className="field-desc"> Card expire date</div>
        <input
          className="balance-input"
          type="text"
          onChange={handleOnchange(setExpireDate)}
        />
      </div>
      <div className="balance-fields">
        <div className="field-desc">Money amount</div>
        <input
          className="balance-input"
          type="text"
          onChange={handleOnchange(setAmount)}
        />
      </div>
      <div className="balance-fields">
        <div className="field-desc">Phone number connected to Card </div>
        <input
          className="balance-input"
          type="text"
          onChange={handleOnchange(setPhoneNum)}
        />
      </div>
      <div className="balance-fields">
        <div className="field-desc">Confirmation code sent to phone number</div>
        <input
          className="balance-input"
          type="text"
          onChange={handleOnchange(setConfirm)}
        />
      </div>
      <button className="accept-balance" onClick={balanceAccepted}>
        Accept
      </button>
    </div>
  );
};

export default BalanceModalContent;
