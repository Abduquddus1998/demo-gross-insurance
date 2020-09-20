import { createReducer } from "@reduxjs/toolkit";

import { toggleNavigation } from "store/actions/navigation";

const initialState = {
  toggleNavigation: false,
};

export default createReducer(initialState, {
  [toggleNavigation]: (state) => {
    return { ...state, toggleNavigation: !state.toggleNavigation };
  },
});
