import { createReducer } from "@reduxjs/toolkit";

import {
  onShowModal,
  getShareDetails,
  shareSale,
  getTradeShares,
  buyShareFirstStepInfo,
  buyShareSecondStep,
  getCurrentShares,
} from "store/actions/shares";

const initialState = {
  hideModal: false,
  shareDetails: "",
  transferType: "",
  tradeShares: [],
  currentShares: [],
  firstStepInfo: "",
  secondStepInfo: "",
  showNextStep: false,
};

export default createReducer(initialState, {
  [onShowModal]: (state) => {
    return { ...state, hideModal: !state.hideModal };
  },
  [getShareDetails.fulfilled]: (state, action) => {
    return {
      ...state,
      shareDetails: action.payload.data,
    };
  },
  [shareSale.fulfilled]: (state) => {
    return { ...state, hideModal: false };
  },
  [getTradeShares.fulfilled]: (state, action) => {
    return {
      ...state,
      tradeShares: action.payload.data,
    };
  },
  [buyShareFirstStepInfo.fulfilled]: (state, action) => {
    return { ...state, firstStepInfo: action.payload.data };
  },
  [buyShareSecondStep.fulfilled]: (state, action) => {
    return {
      ...state,
      secondStepInfo: action.payload.data,
      showNextStep: true,
    };
  },
  [getCurrentShares.fulfilled]: (state, action) => {
    return { ...state, currentShares: action.payload.data.bonds };
  },
});
