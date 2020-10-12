import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import shareApi from "api/share-api";

export const onShowModal = createAction("on.show.modal");

export const getShareDetails = createAsyncThunk(
  "get.share.info",
  async (shareParams) => {
    const url = shareParams.customer_account_number
      ? "/my-bonds-info"
      : "/selling-bonds-info";

    return await shareApi.getShareInfo(url, shareParams);
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

export const getTradeShares = createAsyncThunk(
  "get.all.trade.shares",
  async () => {
    return await shareApi.getAllTradeShares("/selling-bonds-dash");
  }
);

export const buyShareFirstStepInfo = createAsyncThunk(
  "get.first.step.info",
  async (shareParams) => {
    return await shareApi.shareBuyFirstStep(
      "/make-transfer-first",
      shareParams
    );
  }
);

export const shareBuyFirstStep = (bond_series, bond_number) => async (
  dispatch
) => {
  return await dispatch(buyShareFirstStepInfo({ bond_series, bond_number }));
};

export const buyShareSecondStep = createAsyncThunk(
  "get.second.step.info",
  async (shareParams) => {
    return await shareApi.shareBuySecondStep(
      "/make-transfer-second",
      shareParams
    );
  }
);

export const shareBuySecondStep = (customer_account_number) => async (
  dispatch
) => {
  return await dispatch(buyShareSecondStep({ customer_account_number }));
};
