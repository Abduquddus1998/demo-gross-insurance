import { createReducer } from "@reduxjs/toolkit";

import { toggleNavigation, changeNavPosition } from "store/actions/navigation";

const initialState = {
  toggleNavigation: false,
  navPositionChanged: false,
};

export default createReducer(initialState, {
  [toggleNavigation]: (state) => {
    return { ...state, toggleNavigation: !state.toggleNavigation };
  },
  [changeNavPosition]: (state, action) => {
    return { ...state, navPositionChanged: action.payload };
  },
});
