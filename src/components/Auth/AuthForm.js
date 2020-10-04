import React from "react";

import { Slash } from "assets/icons/svg-icons";
import LogoLight from "assets/images/gross-logo-light.png";

import "./AuthForm.scss";

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
      </form>
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
      <div className="social-links">
        <div>App store</div>
        <div>Google Play</div>
      </div>
    </div>
  );
};

export default AuthForm;
