// @flow
import { createReducer } from "@reduxjs/toolkit";
import { register, confirm, onUserLogin } from "store/actions/auth";

import type { Auth } from "./types/authTypes";

const initialState: Auth = {
  authLoading: false,
  authError: "",
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
    localStorage.setItem("account_number", action.payload.data.account_number);
    return {
      ...state,
      authLoading: false,
      authError: "",
      accountNumber: action.payload.data.account_number,
    };
  },
  [onUserLogin.rejected]: (state, action) => {
    return { ...state, authError: action.error.message, authLoading: false };
  },
});
