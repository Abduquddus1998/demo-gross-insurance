import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { navigationRouter } from "store/actions/navigation";

import Logo from "assets/images/gross-logo-light.png";

import "./Navigation.scss";

const Navigation = () => {
  const dispatch = useDispatch();
  const expand = useSelector((state) => state.navigation.toggleNavigation);

  const [scrollStyle, setScrollStyle] = useState(false);
  const [toggleLang, setToggle] = useState(false);

  const accountNumber = sessionStorage.getItem("account_number");

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 150;

      if (isScrolled) {
        setScrollStyle(isScrolled);
      } else {
        setScrollStyle(false);
      }
    };

    document.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  });

  const checkUserAuth = () => {
    if (!accountNumber) {
      return dispatch(navigationRouter("/auth"));
    }

    return dispatch(navigationRouter("/depository/currentshares"));
  };

  return (
    <div
      className={expand ? "navigation-expanded" : "navigation-outer"}
      style={scrollStyle ? { padding: 0 } : {}}
    >
      <nav
        className="inner-navigation"
        style={!scrollStyle ? { borderRadius: "15px" } : {}}
      >
        <div className="navigation-items">
          <div
            onClick={() => dispatch(navigationRouter("/"))}
            className="logo-container"
          >
            <img src={Logo} alt="company-logo" />
          </div>
          <div
            className="nav-item"
            onClick={() => dispatch(navigationRouter("/"))}
          >
            Glavnaya
          </div>
          <div
            className="nav-item"
            onClick={() => dispatch(navigationRouter("/about"))}
          >
            О Нас
          </div>
          <div
            className="nav-item"
            onClick={() => dispatch(navigationRouter("/advertising"))}
          >
            Obyevleniya
          </div>
          <div
            className="nav-item"
            onClick={() => dispatch(navigationRouter("/shop"))}
          >
            Targovlya
          </div>
          <div className="nav-item" onClick={checkUserAuth}>
            Depository
          </div>

          <div className="nav-item">
            <div
              style={{ padding: "0 1rem" }}
              onClick={() => setToggle(!toggleLang)}
            >
              RU
            </div>
            {toggleLang && (
              <div className="lang-dropDown">
                <div onClick={() => setToggle(!toggleLang)}>UZB</div>
                <div onClick={() => setToggle(!toggleLang)}>RU</div>
              </div>
            )}
          </div>
          <div
            className="nav-item"
            onClick={() => dispatch(navigationRouter("/auth"))}
          >
            Login
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navigation;
