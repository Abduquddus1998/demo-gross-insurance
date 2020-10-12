import { createReducer } from "@reduxjs/toolkit";

import {
  getProfile,
  allSharesInSale,
  allSharesInBuy,
} from "store/actions/dashboard";

const initialState = {
  profile: {
    customer_name: "",
    customer_surname: "",
    customer_mail: "",
  },
  sharesInSale: [],
  sharesInBuy: [],
};

export default createReducer(initialState, {
  [getProfile.fulfilled]: (state, action) => {
    return { ...state, profile: action.payload.data };
  },
  [allSharesInSale.fulfilled]: (state, action) => {
    return { ...state, sharesInSale: action.payload.data };
  },
  [allSharesInBuy.fulfilled]: (state, action) => {
    return { ...state, sharesInBuy: action.payload.data };
  },
});
