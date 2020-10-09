import { createAsyncThunk } from "@reduxjs/toolkit";
import authApi from "api/auth-api";
import { navigationRouter } from "./navigation";

export const register = createAsyncThunk(
  "user.registration",
  async (userParams) => {
    return authApi.registration("/sign-up-confirm-email", userParams);
  }
);

export const userRegistration = (
  customer_name,
  customer_surname,
  customer_email
) => async (dispatch) => {
  return await dispatch(
    register({ customer_name, customer_surname, customer_email })
  );
};

export const confirm = createAsyncThunk(
  "confirm.registration",
  async (confirmParams) => {
    return authApi.confirmation("/sign-up-email-confirmed", confirmParams);
  }
);

export const userConfirmation = (security_key, customer_password) => async (
  dispatch
) => {
  await dispatch(confirm({ security_key, customer_password }));
  return await dispatch(navigationRouter("/depository"));
};
