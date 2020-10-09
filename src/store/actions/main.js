import { createAsyncThunk } from "@reduxjs/toolkit";
import mainApi from "api/main-api";

export const postReviews = createAsyncThunk(
  "post.user.reviews",
  async (reviews) => {
    return mainApi.postReviews("/reviews", reviews);
  }
);

export const postUserReview = (
  reviewer_nickname,
  reviewer_mail,
  reviewer_comment
) => async (dispatch) => {
  return await dispatch(
    postReviews({ reviewer_nickname, reviewer_mail, reviewer_comment })
  );
};

export const getReviews = createAsyncThunk("get.all.reviews", async () => {
  return await mainApi.getReviews("/reviews");
});
