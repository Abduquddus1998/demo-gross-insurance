import { createReducer } from "@reduxjs/toolkit";
import { getReviews, postReviews } from "store/actions/main";

const initialState = {
  reviews: [],
  reviewsLoading: false,
};

export default createReducer(initialState, {
  [postReviews.pending]: (state) => {
    return { ...state, reviewsLoading: true };
  },
  [postReviews.fulfilled]: (state) => {
    return { ...state, reviewsLoading: false };
  },
  [getReviews.fulfilled]: (state, action) => {
    return { ...state, reviews: action.payload.data, reviewsLoading: false };
  },
});
