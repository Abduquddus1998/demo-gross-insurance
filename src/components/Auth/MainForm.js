import React, { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import InstallApp from "../../InstallApp";

import { navigationRouter } from "store/actions/navigation";
import { login } from "store/actions/auth";

import { Slash } from "assets/icons/svg-icons";

import AppStoreLogo from "assets/images/AppStore.png";
import GooglePlayLogo from "assets/images/Googleplay.png";

import "./MainForm.scss";

const MainForm = () => {
  const dispatch = useDispatch();
  const loginLoading = useSelector((state) => state.auth.authLoading);
  const authError = useSelector((state) => state.auth.authError);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [inputErrors, setError] = useState("");

  const onChangeHandle = (setState) => (e) => setState(e.target.value);

  const onLogin = useCallback(() => {
    if (!email.length || !password.length) {
      setError("Please fill all input fields");
    }

    dispatch(login(email, password)).then(({ payload }) => {
      payload && dispatch(navigationRouter("/depository/currentshares"));
    });
  }, [email, password, dispatch]);

  return (
    <div className="main-auth-form">
      <div className="main-form">
        <div className="form-title">
          <h3>Authorization</h3>
        </div>
        <input
          type="mail"
          name="mail"
          placeholder="Mail..."
          value={email}
          onChange={onChangeHandle(setEmail)}
        />
        <input
          type="password"
          name="password"
          placeholder="Password..."
          value={password}
          onChange={onChangeHandle(setPassword)}
        />
        {authError && <div className="reg-error">{authError}</div>}
        {inputErrors && <div className="reg-error">{inputErrors}</div>}
        <button className="main-auth-button" onClick={onLogin}>
          {loginLoading ? (
            <div
              className="spinner-border text-light"
              style={{ width: "25px", height: "25px" }}
              role="status"
            >
              <span className="sr-only">Loading...</span>
            </div>
          ) : (
            <div>Login</div>
          )}{" "}
        </button>
        <div className="password-lost">
          <span>
            <ion-icon name="checkbox-outline" size="large"></ion-icon>
          </span>
          <div>Password lost dolor sit amet, consectetur adipisicing elit.</div>
        </div>
      </div>
      <div className="main-auth-options">
        <div onClick={() => dispatch(navigationRouter("/auth"))}>
          <h4>Login</h4>
        </div>
        <span>
          <Slash width="20px" height="30px" color="#fff" />
        </span>
        <div onClick={() => dispatch(navigationRouter("/register"))}>
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
      <div className="app-install">
        <InstallApp />
      </div>
    </div>
  );
};

export default MainForm;
