import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { userConfirmation } from "store/actions/auth";
import { navigationRouter } from "store/actions/navigation";

import LogoLight from "assets/images/gross-logo-light.png";
import AppStoreLogo from "assets/images/AppStore.png";
import GooglePlayLogo from "assets/images/Googleplay.png";

import "./Confirmation.scss";

const Confirmation = () => {
  const dispatch = useDispatch();
  const confirmLoading = useSelector((state) => state.auth.authLoading);
  const confirmError = useSelector((state) => state.auth.authError);

  const [confirmationCode, setCode] = useState("");
  const [newPin, setNewPin] = useState("");
  const [confirmPin, setConfirm] = useState("");
  const [pinError, setPinError] = useState("");

  const handleChange = (setState) => (e) => setState(e.target.value);

  const handleConfirm = async () => {
    if (newPin !== confirmPin) {
      return setPinError("Pins are not equal");
    } else if (!newPin.length || !confirmPin.length) {
      return setPinError("Please enter new pin");
    }

    dispatch(userConfirmation(confirmationCode, confirmPin)).then(
      ({ payload }) => {
        console.log("payload", payload);
        if (payload.data) {
          dispatch(navigationRouter("/depository/currentshares"));
        } else {
          return;
        }
      }
    );
  };

  return (
    <div className="confirmation-container">
      <div className="confirm-form">
        <div className="confirm-title">
          <img src={LogoLight} alt="company-logo" />
          <div>Confirmation</div>
        </div>
        <input
          type="password"
          name="code"
          placeholder="Confirmation code..."
          value={confirmationCode}
          onChange={handleChange(setCode)}
        />
        <input
          type="password"
          name="new-pin"
          placeholder="New pin..."
          value={newPin}
          onChange={handleChange(setNewPin)}
        />
        <input
          type="password"
          name="confirm-pin"
          placeholder="Confirm new pin..."
          value={confirmPin}
          onChange={handleChange(setConfirm)}
        />
        {confirmError && <div className="reg-error">{confirmError}</div>}
        {pinError && <div className="pin-error">{pinError}</div>}
        <button className="confirm-button" onClick={handleConfirm}>
          {confirmLoading ? (
            <div
              className="spinner-border text-light"
              style={{ width: "25px", height: "25px" }}
              role="status"
            >
              <span className="sr-only">Loading...</span>
            </div>
          ) : (
            <div>Confirm</div>
          )}
        </button>
        <div className="resend-password">
          <span>
            <ion-icon name="checkbox-outline" size="large"></ion-icon>
          </span>
          <div>Resend code dolor sit amet, consectetur adipisicing elit.</div>
        </div>
      </div>
      <div className="social-links">
        <div>
          <img src={AppStoreLogo} alt="app store logo" />
        </div>
        <div>
          <img src={GooglePlayLogo} alt="google play logo" />
        </div>
      </div>
    </div>
  );
};

export default Confirmation;
