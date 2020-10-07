import React from "react";
import { useDispatch } from "react-redux";

import { navigationRouter } from "store/actions/navigation";

import { Slash } from "assets/icons/svg-icons";
import LogoLight from "assets/images/gross-logo-light.png";
import AppStoreLogo from "assets/images/AppStore.png";
import GooglePlayLogo from "assets/images/Googleplay.png";

import "./AuthForm.scss";

const AuthForm = () => {
  const dispatch = useDispatch();

  return (
    <div className="form-container">
      <form className="auth-form">
        <div className="form-title">
          <img src={LogoLight} alt="company-logo" />
          <div>Authorization</div>
        </div>
        <input type="mail" name="mail" placeholder="Mail..." />
        <input type="password" name="password" placeholder="Password..." />
        <button className="auth-button"> Login</button>
        <div className="lost-pass">
          <span>
            <ion-icon name="checkbox-outline" size="large"></ion-icon>
          </span>
          <div>Password lost dolor sit amet, consectetur adipisicing elit.</div>
        </div>
        <div className="auth-options">
          <div onClick={() => dispatch(navigationRouter("/auth"))}>
            <h4>Login</h4>
          </div>
          <span>
            <Slash width="20px" height="30px" color="#000" />
          </span>
          <div onClick={() => dispatch(navigationRouter("/register"))}>
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
