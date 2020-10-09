// @flow

export type ReviewsParam = {
  reviewer_username: string,
  reviewer_mail: string,
  reviewer_comment: string,
};

export type GetReviews = {
  review_id: string,
  reviewer_comment: string,
  reviewer_nickname: string,
};
