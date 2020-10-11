// @flow
import { createReducer } from "@reduxjs/toolkit";
import { register, confirm, onUserLogin } from "store/actions/auth";

import type { Auth } from "./types/authTypes";

const initialState: Auth = {
  authLoading: false,
  authError: "",
  currentShares: [],
  accountNumber: "",
};

export default createReducer(initialState, {
  [register.pending]: (state) => {
    return { ...state, authLoading: true };
  },
  [register.fulfilled]: (state) => {
    return { ...state, authLoading: false, authError: "" };
  },
  [register.rejected]: (state, action) => {
    return { ...state, authError: action.error.message, authLoading: false };
  },
  [confirm.pending]: (state) => {
    return { ...state, authLoading: true };
  },
  [confirm.fulfilled]: (state) => {
    return { ...state, authLoading: false, authError: "" };
  },
  [confirm.rejected]: (state, action) => {
    return { ...state, authError: action.error.message, authLoading: false };
  },
  [onUserLogin.pending]: (state) => {
    return { ...state, authLoading: true };
  },
  [onUserLogin.fulfilled]: (state, action) => {
    return {
      ...state,
      authLoading: false,
      authError: "",
      currentShares: action.payload.data.bonds,
      accountNumber: action.payload.data.account_number,
    };
  },
  [onUserLogin.rejected]: (state, action) => {
    return { ...state, authError: action.error.message, authLoading: false };
  },
});
