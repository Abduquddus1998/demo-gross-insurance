import React from "react";

import { Slash } from "assets/icons/svg-icons";

import "./MainForm.scss";

const MainForm = () => {
  return (
    <div className="main-auth-form">
      <form className="main-form">
        <div className="form-title">
          <h3>Some title</h3>
        </div>
        <input type="mail" />
        <input type="password" />
        <button className="main-auth-button"> Login</button>
        <div className="password-lost">
          <span>
            <ion-icon name="checkbox-outline" size="large"></ion-icon>
          </span>
          <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</div>
        </div>
      </form>
      <div className="main-auth-options">
        <div>
          <h4>Login</h4>
        </div>
        <span>
          <Slash width="20px" height="30px" color="#fff" />
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

export default MainForm;
