import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Modal } from "antd";

import { onShowModal } from "store/actions/shares";
import {
  getProfileInfo,
  updateBalance,
  updatePasswords,
  updateProfile,
} from "store/actions/dashboard";

import ProfilePhoto from "assets/images/user-profile.png";

import "./Profile.scss";
import BalanceModalContent from "./BalanceModalContent";

const Profile = () => {
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.dashboard.profile);
  const showModal = useSelector((state) => state.shares.hideModal);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [surname, setSurname] = useState("");
  const [newPin, setNewPin] = useState("");
  const [confirmPin, setConfirm] = useState("");
  const [currentPin, setCurrent] = useState("");
  const [pinError, setPinError] = useState("");

  const accountNumber = sessionStorage.getItem("account_number");

  const bodyStyle = {
    paddingTop: "1rem",
    paddingLeft: "2rem",
    paddingRight: "2rem",
  };

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

  const handleCancel = () => {
    dispatch(onShowModal());
  };

  const handleOk = () => {
    dispatch(onShowModal());
  };

  const updateUseBalance = (
    cardNumber,
    phoneNum,
    expireDate,
    amount,
    confirm
  ) => {
    dispatch(
      updateBalance(
        accountNumber,
        phoneNum,
        cardNumber,
        expireDate,
        amount,
        confirm
      )
    );
  };

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
        <button
          className="balance-button"
          onClick={() => dispatch(onShowModal())}
        >
          Top up Balance
        </button>
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
      <React.Fragment>
        <Modal
          visible={showModal}
          onOk={handleOk}
          onCancel={handleCancel}
          bodyStyle={bodyStyle}
          width="380px"
          footer={[
            <Button onClick={handleOk} key="back" type="primary" danger>
              Cancel
            </Button>,
            <Button onClick={handleOk} key="submit" type="primary">
              Transfer
            </Button>,
          ]}
        >
          <BalanceModalContent updateBalance={updateUseBalance} />
        </Modal>
      </React.Fragment>
    </div>
  );
};

export default Profile;
