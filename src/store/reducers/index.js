import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import navigation from "./navigation";

export const rootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    navigation,
  });
