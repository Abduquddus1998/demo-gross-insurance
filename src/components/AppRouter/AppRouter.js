import React from "react";
import { Switch, Route } from "react-router-dom";

import Main from "components/Main/Main";
import About from "components/About/About";
import ShareTrade from "components/ShareTrade/ShareTrade";
import Dashboard from "components/Dashboard/Dashboard";
import AuthForm from "components/Auth/AuthForm";
import RegisterForm from "components/Auth/RegisterForm";

import "./AppRouter.scss";

const AppRouter = () => {
  return (
    <React.Fragment>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/about" component={About} />
        <Route path="/shop" component={ShareTrade} />
        <Route path="/advertising" component={Main} />
        <Route path="/depository" component={Dashboard} />
        <Route path="/auth" component={AuthForm} />
        <Route path="/register" component={RegisterForm} />
      </Switch>
    </React.Fragment>
  );
};

export default AppRouter;
