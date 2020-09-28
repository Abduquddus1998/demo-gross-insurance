import React from "react";
import { Switch, Route } from "react-router-dom";
import Navigation from "components/Navigation/Navigation";
import Main from "components/Main/Main";
import About from "components/About/About";
import ShareTrade from "components/ShareTrade/ShareTrade";
import Footer from "components/Footer/Footer";

import "./AppRouter.scss";

const AppRouter = () => {
  return (
    <div>
      <Navigation />
      <div className="content-container">
        <Switch>
          <Route exact path="/" component={Main} />
        </Switch>
      </div>
      <Footer />
    </div>
  );
};

export default AppRouter;
