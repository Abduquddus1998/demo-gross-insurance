import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  getProfileInfo,
  updatePasswords,
  updateProfile,
} from "store/actions/dashboard";

import ProfilePhoto from "assets/images/user-profile.png";

import "./Profile.scss";

const Profile = () => {
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.dashboard.profile);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [surname, setSurname] = useState("");
  const [newPin, setNewPin] = useState("");
  const [confirmPin, setConfirm] = useState("");
  const [currentPin, setCurrent] = useState("");
  const [pinError, setPinError] = useState("");

  const accountNumber = localStorage.getItem("account_number");

  const handleOnChange = (setState) => (e) => setState(e.target.value);

  useEffect(() => {
    dispatch(getProfileInfo(accountNumber)).then(({ payload }) => {
      setName(payload.data.customer_name);
      setEmail(payload.data.customer_mail);
      setSurname(payload.data.customer_surname);
    });
  }, [dispatch, accountNumber]);

  const saveProfile = useCallback(() => {
    dispatch(updateProfile(accountNumber, email, name, surname));
  }, [dispatch, accountNumber, email, name, surname]);

  const savePassword = useCallback(() => {
    if (newPin !== confirmPin || (!newPin && !confirmPin)) {
      return setPinError("Pins are not equal");
    }

    dispatch(updatePasswords(accountNumber, currentPin, newPin));
  }, [dispatch, accountNumber, currentPin, newPin, confirmPin]);

  return (
    <div className="user-profile">
      <div className="user-photo">
        <div className="photo">
          <img src={ProfilePhoto} alt="profile" />
        </div>
        <div className="account-details">
          <h4>Account Id:</h4> <div>{profile.customer_account_number}</div>
        </div>
        <div className="account-details">
          <h4>Balance:</h4> <div>{profile.customer_balance}</div>
        </div>
        <button className="balance-button">Top up Balance </button>
      </div>

      <div className="user-info">
        <div className="person-details">
          <h3>Personal Details</h3>
          <input
            type="text"
            name="name"
            value={name}
            onChange={handleOnChange(setName)}
          />
          <input
            type="text"
            name="surname"
            value={surname}
            onChange={handleOnChange(setSurname)}
          />
          <input
            type="email"
            name="surname"
            value={email}
            onChange={handleOnChange(setEmail)}
          />
          <button className="save-button" onClick={saveProfile}>
            Save
          </button>
        </div>
        <div className="pin-details">
          <h3>Password Details</h3>
          <input
            type="password"
            name="currant-pin"
            placeholder="Current pin..."
            onChange={handleOnChange(setCurrent)}
          />
          <input
            type="password"
            name="new-pin"
            placeholder="New pin..."
            onChange={handleOnChange(setNewPin)}
          />
          <input
            type="password"
            name="confirm-pin"
            placeholder="Confirm pin..."
            onChange={handleOnChange(setConfirm)}
          />
          {pinError && (
            <div
              className="text-danger"
              style={{ textAlign: "center", fontSize: "18px" }}
            >
              {pinError}
            </div>
          )}
          <button className="save-button" onClick={savePassword}>
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
