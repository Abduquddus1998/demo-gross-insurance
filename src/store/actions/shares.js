import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import shareApi from "api/share-api";

export const onShowModal = createAction("on.show.modal");

export const getShareDetails = createAsyncThunk(
  "get.share.info",
  async (shareParams) => {
    return await shareApi.getShareInfo("/my-bonds-info", shareParams);
  }
);

export const getShareDetailsInfo = (
  customer_account_number,
  bond_series,
  bond_number
) => async (dispatch) => {
  return await dispatch(
    getShareDetails({ customer_account_number, bond_series, bond_number })
  );
};

export const shareSale = createAsyncThunk("sell.share", async (saleParams) => {
  return await shareApi.shareSaleRequest("/buy-sell-request", saleParams);
});

export const sellShareAction = (
  requester_account_number,
  bond_series,
  bond_number,
  money_amount,
  transfer_type = 0
) => async (dispatch) => {
  return await dispatch(
    shareSale({
      requester_account_number,
      bond_series,
      bond_number,
      money_amount,
      transfer_type,
    })
  );
};
