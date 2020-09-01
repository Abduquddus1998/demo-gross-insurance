import React from "react";
import { useDispatch } from "react-redux";
import { navigationRouter } from "store/actions/navigation";

import "./Navigation.scss";

const Navigation = () => {
  const dispatch = useDispatch();
  return (
    <div className="navigation-outer">
      <div className="inner-navigation">
        <div
          onClick={() => dispatch(navigationRouter("/"))}
          className="logo-container"
        >
          <h4>Logo</h4>
        </div>
        <div className="navigation-items">
          <div onClick={() => dispatch(navigationRouter("/restaurants"))}>
            Restaurant
          </div>
          <div onClick={() => dispatch(navigationRouter("/cafes"))}>Cafe</div>
          <div onClick={() => dispatch(navigationRouter("/chayxana"))}>
            Chayxana
          </div>
          <div onClick={() => dispatch(navigationRouter("/settings"))}>
            Settings
          </div>
        </div>
        <div className="navigation-icons">
          <div className="search-icon">
            <span>
              <ion-icon name="search-outline" size="large"></ion-icon>
            </span>
          </div>
          <div className="navigation-toggler">
            <span>
              <ion-icon name="menu-outline" size="large"></ion-icon>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
