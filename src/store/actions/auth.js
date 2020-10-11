import { createAsyncThunk } from "@reduxjs/toolkit";
import authApi from "api/auth-api";

export const register = createAsyncThunk(
  "user.registration",
  async (userParams) => {
    return await authApi.registration("/sign-up-confirm-email", userParams);
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
    return await authApi.confirmation(
      "/sign-up-email-confirmed",
      confirmParams
    );
  }
);

export const userConfirmation = (security_key, customer_password) => async (
  dispatch
) => {
  return await dispatch(confirm({ security_key, customer_password }));
};

export const onUserLogin = createAsyncThunk(
  "user.login",
  async (loginParams) => {
    return await authApi.userLogin("/sign-in", loginParams);
  }
);

export const login = (customer_email, customer_password) => async (
  dispatch
) => {
  return await dispatch(onUserLogin({ customer_email, customer_password }));
};
