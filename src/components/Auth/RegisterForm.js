import React from "react";
import { useDispatch } from "react-redux";

import { navigationRouter } from "store/actions/navigation";

import LogoLight from "assets/images/gross-logo-light.png";
import AppStoreLogo from "assets/images/AppStore.png";
import GooglePlayLogo from "assets/images/Googleplay.png";

import "./RegistrationForm.scss";

const RegisterForm = () => {
  const dispatch = useDispatch();

  return (
    <div className="register-container">
      <form className="registration-form">
        <div className="registration-title">
          <img src={LogoLight} alt="company-logo" />
          <div>Registration</div>
        </div>
        <input type="text" placeholder="Name..." name="mail" />
        <input type="text" name="surname" placeholder="Surname..." />
        <input type="mail" name="email" placeholder="Mail..." />
        <button
          className="reg-button"
          onClick={() => dispatch(navigationRouter("/confirm"))}
        >
          Register
        </button>
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

export default RegisterForm;
