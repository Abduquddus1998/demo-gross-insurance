import { createAsyncThunk } from "@reduxjs/toolkit";
import dashboardApi from "api/deshbord-api";

export const getProfile = createAsyncThunk(
  "get.profile.info",
  async (profileParam) => {
    return await dashboardApi.getProfileInfo("/profile", profileParam);
  }
);

export const getProfileInfo = (customer_account_number) => async (dispatch) => {
  return await dispatch(getProfile({ customer_account_number }));
};

export const allSharesInSale = createAsyncThunk(
  "shares.in.sale",
  async (accountId) => {
    return await dashboardApi.sharesInSale("/my-selling-bonds-dash", accountId);
  }
);

export const sharesInSale = (customer_account_number) => async (dispatch) => {
  return await dispatch(allSharesInSale({ customer_account_number }));
};

export const allSharesInBuy = createAsyncThunk(
  "shares.in.buy",
  async (accountId) => {
    return await dashboardApi.sharesInBuy("/my-buying-bonds-dash", accountId);
  }
);

export const sharesInBuy = (customer_account_number) => async (dispatch) => {
  return await dispatch(allSharesInBuy({ customer_account_number }));
};
