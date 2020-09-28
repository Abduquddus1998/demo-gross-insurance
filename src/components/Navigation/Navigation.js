import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { navigationRouter } from "store/actions/navigation";

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
      <div className="inner-navigation">
        <div className="navigation-items">
          <div
            onClick={() => dispatch(navigationRouter("/"))}
            className="logo-container"
          >
            <h4>Logo</h4>
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
            onClick={() => dispatch(navigationRouter("/shop"))}
          >
            Targovlya
          </div>
          <div
            className="nav-item"
            onClick={() => dispatch(navigationRouter("/advertising"))}
          >
            Obyevleniya
          </div>
          <div className="nav-item">Lang</div>
          <div
            className="nav-item"
            onClick={() => dispatch(navigationRouter("/dashboard"))}
          >
            Login
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
