import React from "react";

import LogoLight from "assets/images/gross-logo-light.png";
import AppStoreLogo from "assets/images/AppStore.png";
import GooglePlayLogo from "assets/images/Googleplay.png";

import "./Confirmation.scss";

const Confirmation = () => {
  return (
    <div className="confirmation-container">
      <form className="confirm-form">
        <div className="confirm-title">
          <img src={LogoLight} alt="company-logo" />
          <div>Confirmation</div>
        </div>
        <input type="password" name="code" placeholder="Confirmation code..." />
        <input type="password" name="new-pin" placeholder="New pin..." />
        <input
          type="password"
          name="confirm-pin"
          placeholder="Confirm new pin..."
        />
        <button className="confirm-button"> Confirm</button>
        <div className="resend-password">
          <span>
            <ion-icon name="checkbox-outline" size="large"></ion-icon>
          </span>
          <div>Resend code dolor sit amet, consectetur adipisicing elit.</div>
        </div>
      </form>
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
