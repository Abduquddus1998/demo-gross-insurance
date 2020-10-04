import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { navigationRouter } from "store/actions/navigation";

import Logo from "assets/images/gross-logo.png";

import "./Navigation.scss";

const Navigation = () => {
  const dispatch = useDispatch();
  const expand = useSelector((state) => state.navigation.toggleNavigation);

  const [scrollStyle, setScrollStyle] = useState(false);
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

  return (
    <div
      className={expand ? "navigation-expanded" : "navigation-outer"}
      style={scrollStyle ? { padding: 0 } : {}}
    >
      <nav className="inner-navigation">
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
          <div
            className="nav-item"
            onClick={() =>
              dispatch(navigationRouter("/depository/currentshares"))
            }
          >
            Depository
          </div>

          <div className="nav-item">Lang</div>
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
