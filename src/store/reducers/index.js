import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import navigation from "./navigation";
import shares from "./shares";

export const rootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    navigation,
    shares,
  });
