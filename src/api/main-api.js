// @flow
import { Base } from "./base";

class MainApi extends Base {
  async postReviews(url, params) {
    return this.postRequest(url, params);
  }

  async getReviews(url) {
    return this.getRequest(url);
  }
}

const mainApi = new MainApi();

export default mainApi;
