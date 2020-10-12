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

export const updateUserProfile = createAsyncThunk(
  "update.user.profile",
  async (profile) => {
    return await dashboardApi.updateProfile("/update-info", profile);
  }
);

export const updateProfile = (
  customer_account_number,
  customer_email,
  customer_name,
  customer_surname
) => async (dispatch) => {
  return await dispatch(
    updateUserProfile({
      customer_account_number,
      customer_email,
      customer_name,
      customer_surname,
    })
  );
};

export const updateUserPassword = createAsyncThunk(
  "update.user.password",
  async (pins) => {
    return await dashboardApi.updatePassword("/update-password", pins);
  }
);

export const updatePasswords = (
  customer_account_number,
  customer_current_password,
  customer_new_password
) => async (dispatch) => {
  return await dispatch(
    updateUserPassword({
      customer_account_number,
      customer_current_password,
      customer_new_password,
    })
  );
};

export const updateUserBalance = createAsyncThunk(
  "update.user.balance",
  async (accountParams) => {
    return dashboardApi.balanceUpdate("/fill-balance", accountParams);
  }
);

export const updateBalance = (
  customer_account_number,
  customer_phone_number,
  customer_card_number,
  customer_card_valid_date,
  money_amount,
  confirmation_code
) => async (dispatch) => {
  return dispatch(
    updateUserBalance({
      customer_account_number,
      customer_phone_number,
      customer_card_number,
      customer_card_valid_date,
      money_amount,
      confirmation_code,
    })
  );
};
