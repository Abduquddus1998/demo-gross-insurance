import React from "react";

import { Slash } from "assets/icons/svg-icons";
import LogoLight from "assets/images/gross-logo-light.png";

import "./AuthForm.scss";
import AppStoreLogo from "../../assets/images/AppStore.png";
import GooglePlayLogo from "../../assets/images/Googleplay.png";

const AuthForm = () => {
  return (
    <div className="form-container">
      <form className="auth-form">
        <div className="form-title">
          <img src={LogoLight} alt="company-logo" />
          <div>Authorization</div>
        </div>
        <input type="mail" />
        <input type="password" />
        <button className="auth-button"> Login</button>
        <div className="lost-pass">
          <span>
            <ion-icon name="checkbox-outline" size="large"></ion-icon>
          </span>
          <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</div>
        </div>
        <div className="auth-options">
          <div>
            <h4>Login</h4>
          </div>
          <span>
            <Slash width="20px" height="30px" color="#000" />
          </span>
          <div>
            <h4>Register</h4>
          </div>
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

export default AuthForm;
