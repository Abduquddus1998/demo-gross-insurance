import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import navigation from "./navigation";
import shares from "./shares";
import auth from "./auth";
import main from "./main";

export const rootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    navigation,
    auth,
    main,
    shares,
  });
