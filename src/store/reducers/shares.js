import { createReducer } from "@reduxjs/toolkit";

import { onShowModal } from "store/actions/shares";

const initialState = {
  hideModal: false,
};

export default createReducer(initialState, {
  [onShowModal]: (state) => {
    return { ...state, hideModal: !state.hideModal };
  },
});
