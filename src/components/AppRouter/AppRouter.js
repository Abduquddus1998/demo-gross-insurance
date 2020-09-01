import React from "react";
import { Switch, Route } from "react-router-dom";
import Navigation from "components/Navigation/Navigation";
import CafeList from "components/Cafes/CafeList";
import RestaurantList from "components/Restaurants/RestaurantList";
import Main from "components/Main/Main";
import ChayxanaList from "../Chayxana/ChayxanaList";
import Settings from "components/Settings/Settings";

const AppRouter = () => {
  return (
    <div>
      <Navigation />
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/cafes" component={CafeList} />
        <Route path="/restaurants" component={RestaurantList} />
        <Route path="/chayxana" component={ChayxanaList} />
        <Route path="/settings" component={Settings} />
      </Switch>
    </div>
  );
};

export default AppRouter;
