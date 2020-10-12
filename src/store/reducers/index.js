import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import navigation from "./navigation";
import shares from "./shares";
import auth from "./auth";
import main from "./main";
import dashboard from "./dashboard";

export const rootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    navigation,
    auth,
    main,
    shares,
    dashboard,
  });
