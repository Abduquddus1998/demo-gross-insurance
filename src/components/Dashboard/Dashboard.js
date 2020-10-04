import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";

import Navigation from "components/Navigation/Navigation";
import Footer from "components/Footer/Footer";
import CurrentShares from "./CurrentShares";
import SharesInSale from "./SharesInSale";
import SharesToBuy from "./SharesToBuy";
import Profile from "./Profile";

import { navigationRouter } from "store/actions/navigation";

import "./Dashboard.scss";

const Dashboard = () => {
  const [classId, setClassId] = useState(1);
  const dispatch = useDispatch();

  const renderContent = (path, id) => {
    setClassId(id);
    dispatch(navigationRouter(path));
  };

  return (
    <div className="dashboard-container">
      <Navigation />
      <div className="dashboard">
        <div className="title">
          <h3>Dashboard</h3>
        </div>
        <div className="dashboard-route">
          <div
            className={classId === 1 ? "active-route" : "route-items"}
            onClick={() => renderContent("/depository/currentshares", 1)}
          >
            Current shares
          </div>
          <div
            onClick={() => renderContent("/depository/insale", 2)}
            className={classId === 2 ? "active-route" : "route-items"}
          >
            Requested shares in sale
          </div>
          <div
            onClick={() => renderContent("/depository/tobuy", 3)}
            className={classId === 3 ? "active-route" : "route-items"}
          >
            Requested shares to buy
          </div>
          <div
            onClick={() => renderContent("/depository/profile", 4)}
            className={classId === 4 ? "active-route" : "route-items"}
          >
            Profile
          </div>
        </div>
        <div className="content-board">
          <Switch>
            <Route
              exact
              path="/depository/currentshares"
              component={CurrentShares}
            />
            <Route path="/depository/insale" component={SharesInSale} />
            <Route path="/depository/tobuy" component={SharesToBuy} />
            <Route path="/depository/profile" component={Profile} />
          </Switch>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Dashboard;
