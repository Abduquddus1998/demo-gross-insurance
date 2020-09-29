import { createAction } from "@reduxjs/toolkit";
import { push } from "connected-react-router";

export const navigationRouter = (path) => (dispatch) => {
  return dispatch(push(path));
};

export const toggleNavigation = createAction("toggle.navigation");

export const changeNavPosition = createAction(
  "change.nav.position",
  (status) => {
    return {
      payload: status,
    };
  }
);
