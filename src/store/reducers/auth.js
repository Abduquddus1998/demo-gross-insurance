// @flow
import { createReducer } from "@reduxjs/toolkit";
import { register } from "store/actions/auth";

import type { Auth } from "./types/authTypes";

const initialState: Auth = {
  registrationError: "",
  registrationLoading: false,
};

export default createReducer(initialState, {
  [register.pending]: (state) => {
    return { ...state, registrationLoading: true };
  },
  [register.fulfilled]: (state) => {
    return { ...state, registrationLoading: false };
  },
  [register.rejected]: (state) => {
    return {
      ...state,
      registrationLoading: false,
      registrationError: "Mail address is already exists",
    };
  },
});
