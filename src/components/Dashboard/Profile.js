import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getProfileInfo } from "store/actions/dashboard";

import ProfilePhoto from "assets/images/user-profile.png";

import "./Profile.scss";

const Profile = () => {
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.dashboard.profile);

  const accountNumber = localStorage.getItem("account_number");

  useEffect(() => {
    dispatch(getProfileInfo(accountNumber));
  }, [dispatch, accountNumber]);

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
          <input type="text" name="name" value={profile.customer_name} />
          <input type="text" name="surname" value={profile.customer_surname} />
          <input type="email" name="surname" value={profile.customer_mail} />
          <button className="save-button">Save</button>
        </div>
        <div className="pin-details">
          <input
            type="password"
            name="currant-pin"
            placeholder="Current pin..."
          />
          <input type="password" name="new-pin" placeholder="New pin..." />
          <input
            type="password"
            name="confirm-pin"
            placeholder="Confirm pin..."
          />

          <button className="save-button">Save</button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
