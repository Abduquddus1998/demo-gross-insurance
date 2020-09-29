import React from "react";
import { Switch, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { history } from "store";
import { changeNavPosition } from "store/actions/navigation";

import Navigation from "components/Navigation/Navigation";
import Main from "components/Main/Main";
import About from "components/About/About";
import ShareTrade from "components/ShareTrade/ShareTrade";
import Footer from "components/Footer/Footer";
import Dashboard from "components/Dashboard/Dashboard";

import "./AppRouter.scss";

const AppRouter = () => {
  const dispatch = useDispatch();
  const navChange = useSelector((state) => state.navigation.navPositionChanged);

  history.listen(({ pathname }) => {
    if (pathname === "/shop") {
      dispatch(changeNavPosition(true));
    } else {
      dispatch(changeNavPosition(false));
    }
  });

  return (
    <React.Fragment>
      <Navigation />
      <div
        className="content-container"
        style={navChange ? { position: "inherit", zIndex: 0 } : {}}
      >
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/about" component={About} />
          <Route path="/shop" component={ShareTrade} />
          <Route path="/advertising" component={Main} />
          <Route path="/dashboard" component={Dashboard} />
        </Switch>
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default AppRouter;
