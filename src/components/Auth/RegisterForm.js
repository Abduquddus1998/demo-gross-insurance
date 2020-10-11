import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { userRegistration } from "store/actions/auth";
import { navigationRouter } from "store/actions/navigation";

import LogoLight from "assets/images/gross-logo-light.png";
import AppStoreLogo from "assets/images/AppStore.png";
import GooglePlayLogo from "assets/images/Googleplay.png";

import "./RegistrationForm.scss";

const RegisterForm = () => {
  const dispatch = useDispatch();
  const regLoading = useSelector((state) => state.auth.authLoading);
  const regError = useSelector((state) => state.auth.authError);

  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [inputError, serError] = useState("");

  const handleOnchange = (setState) => (e) => setState(e.target.value);

  const onRegister = async () => {
    if (!name.length || !surname.length || !email.length) {
      return serError("Please fill all inputs");
    }

    await dispatch(userRegistration(name, surname, email)).then(
      ({ payload }) => {
        payload && dispatch(navigationRouter("/confirm"));
      }
    );
  };

  return (
    <div className="register-container">
      <div className="registration-form">
        <div className="registration-title">
          <img src={LogoLight} alt="company-logo" />
          <div>Registration</div>
        </div>
        <input
          type="text"
          placeholder="Name..."
          name="mail"
          value={name}
          onChange={handleOnchange(setName)}
        />
        <input
          type="text"
          name="surname"
          placeholder="Surname..."
          value={surname}
          onChange={handleOnchange(setSurname)}
        />
        <input
          type="mail"
          name="email"
          placeholder="Mail..."
          value={email}
          onChange={handleOnchange(setEmail)}
        />
        {regError && <div className="reg-error">{regError}</div>}
        {inputError && <div className="reg-error">{inputError}</div>}
        <button className="reg-button" onClick={onRegister}>
          {regLoading ? (
            <div
              className="spinner-border text-light"
              style={{ width: "25px", height: "25px" }}
              role="status"
            >
              <span className="sr-only">Loading...</span>
            </div>
          ) : (
            <div>Register</div>
          )}
        </button>
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

export default RegisterForm;
