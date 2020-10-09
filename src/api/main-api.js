// @flow
import { Base } from "./base";

import { ReviewsParam, GetReviews } from "./types/main";

class MainApi extends Base {
  async postReviews(url: string, params: ReviewsParam): Promise<any> {
    return this.postRequest(url, params);
  }

  async getReviews(url: string): Promise<GetReviews[]> {
    return this.getRequest(url);
  }
}

const mainApi: MainApi = new MainApi();

export default mainApi;
