import { push } from "connected-react-router";

export const navigationRouter = (path) => (dispatch) => {
  return dispatch(push(path));
};
