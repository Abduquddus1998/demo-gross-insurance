import React from "react";

import ProfilePhoto from "assets/images/user-profile.png";

import "./Profile.scss";

const Profile = () => {
  return (
    <div className="user-profile">
      <div className="user-photo">
        <div className="photo">
          <img src={ProfilePhoto} alt="profile" />
        </div>
        <div className="account-details">
          <h4>Account Id:</h4> <div>1544545</div>
        </div>
        <div className="account-details">
          <h4>Balance:</h4> <div>13232</div>
        </div>
        <button className="balance-button">top up an account</button>
      </div>

      <div className="user-info">
        <div className="person-details">
          <input type="text" name="name" />
          <input type="text" name="surname" />
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
