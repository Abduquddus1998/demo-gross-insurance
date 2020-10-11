import { createReducer } from "@reduxjs/toolkit";

import { onShowModal, getShareDetails, shareSale } from "store/actions/shares";

const initialState = {
  hideModal: false,
  shareDetails: "",
  transferType: "",
};

export default createReducer(initialState, {
  [onShowModal]: (state) => {
    return { ...state, hideModal: !state.hideModal };
  },
  [getShareDetails.fulfilled]: (state, action) => {
    return {
      ...state,
      shareDetails: action.payload.data,
      transferType: action.payload.data[0].transfer_type,
    };
  },
  [shareSale.fulfilled]: (state) => {
    return { ...state, hideModal: false };
  },
});
