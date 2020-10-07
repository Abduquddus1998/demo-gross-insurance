import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { navigationRouter } from "store/actions/navigation";

import { Slash } from "assets/icons/svg-icons";

import AppStoreLogo from "assets/images/AppStore.png";
import GooglePlayLogo from "assets/images/Googleplay.png";

import "./MainForm.scss";

const MainForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const onChangeHandle = (setState) => (e) => setState(e.target.value);

  return (
    <div className="main-auth-form">
      <form className="main-form">
        <div className="form-title">
          <h3>Authorization</h3>
        </div>
        <input
          type="mail"
          name="mail"
          value={email}
          onChange={onChangeHandle(setEmail)}
        />
        <input
          type="password"
          name="password"
          value={password}
          onChange={onChangeHandle(setPassword)}
        />
        <button className="main-auth-button"> Login</button>
        <div className="password-lost">
          <span>
            <ion-icon name="checkbox-outline" size="large"></ion-icon>
          </span>
          <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</div>
        </div>
      </form>
      <div className="main-auth-options">
        <div onClick={() => dispatch(navigationRouter("auth"))}>
          <h4>Login</h4>
        </div>
        <span>
          <Slash width="20px" height="30px" color="#fff" />
        </span>
        <div onClick={() => dispatch(navigationRouter("register"))}>
          <h4>Register</h4>
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

export default MainForm;
