import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { navigationRouter, toggleNavigation } from "store/actions/navigation";

import "./Navigation.scss";

const Navigation = () => {
  const dispatch = useDispatch();
  const expand = useSelector((state) => state.navigation.toggleNavigation);

  return (
    <div className={expand ? "navigation-expanded" : "navigation-outer"}>
      <div className="inner-navigation">
        <div className="navigation-header">
          <div
            onClick={() => dispatch(navigationRouter("/"))}
            className="logo-container"
          >
            <h4>Logo</h4>
          </div>
          <div
            className="navigation-toggler"
            onClick={() => dispatch(toggleNavigation())}
          >
            <span>
              {expand ? (
                <ion-icon name="close-outline" size="large"></ion-icon>
              ) : (
                <ion-icon name="menu-outline" size="large"></ion-icon>
              )}
            </span>
          </div>
        </div>
        <div className="navigation-items">
          <div
            className="nav-item"
            onClick={() => dispatch(navigationRouter("/restaurants"))}
          >
            Restaurant
          </div>
          <div
            className="nav-item"
            onClick={() => dispatch(navigationRouter("/cafes"))}
          >
            Cafe
          </div>
          <div
            className="nav-item"
            onClick={() => dispatch(navigationRouter("/chayxana"))}
          >
            Chayxana
          </div>
          <div
            className="nav-item"
            onClick={() => dispatch(navigationRouter("/settings"))}
          >
            Settings
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
